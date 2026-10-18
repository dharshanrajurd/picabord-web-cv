import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { normalizeContact, validateContact, type ContactPayload } from "@/lib/contact";

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 1_500;

// Best-effort, per-instance rate limit. Serverless instances don't share memory,
// so this only blunts bursts; use a shared store (e.g. Upstash) for strict limits.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string, now: number) {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function formatText(d: ContactPayload) {
  return [
    `Name: ${d.name}`,
    `Company: ${d.company}`,
    `Role: ${d.role}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    `Interest: ${d.interest}`,
    "",
    "Message:",
    d.message,
  ].join("\n");
}

function formatHtml(d: ContactPayload) {
  const rows = (
    [
      ["Name", d.name],
      ["Company", d.company],
      ["Role", d.role],
      ["Phone", d.phone],
      ["Email", d.email],
      ["Interest", d.interest],
    ] as const
  )
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join("");
  return `<div style="font-family:system-ui,sans-serif;font-size:14px;color:#111">
<h2 style="margin:0 0 12px">New website enquiry</h2>
<table>${rows}</table>
<p style="margin:16px 0 4px"><b>Message</b></p>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(d.message)}</p>
</div>`;
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return json({ ok: false, message: "Your message is too large to send." }, 413);
  }

  let raw: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("bad body");
    raw = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  // Spam checks: honeypot filled, or submitted implausibly fast. Pretend success so bots learn nothing.
  const honeypot = typeof raw.website === "string" ? raw.website.trim() : "";
  const elapsed = typeof raw.elapsedMs === "number" ? raw.elapsedMs : 0;
  if (honeypot || elapsed < MIN_FILL_MS) {
    console.warn("[contact] Dropped likely spam submission", { honeypot: !!honeypot, elapsed });
    return json({ ok: true, delivered: true });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip, Date.now())) {
    return json(
      { ok: false, message: `Too many messages in a short time. Please try again later or email ${siteConfig.contact.email}.` },
      429,
    );
  }

  const data = normalizeContact(raw);
  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, message: "Please fix the highlighted fields and try again.", errors }, 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} Website <onboarding@resend.dev>`;

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY is not set. Logging submission instead of emailing:\n" + formatText(data));
    return json({
      ok: true,
      delivered: false,
      message: `Your message was received and logged, but email delivery isn't configured on this site yet (RESEND_API_KEY is missing), so the team may not see it right away. To be sure, please also email ${siteConfig.contact.email}.`,
    });
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `Website enquiry: ${data.interest} from ${data.name} (${data.company})`.replace(/[\r\n]+/g, " ");
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      text: formatText(data),
      html: formatHtml(data),
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return json(
        { ok: false, message: `We couldn't send your message right now. Please try again shortly or email ${siteConfig.contact.email}.` },
        502,
      );
    }
    return json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email", err);
    return json(
      { ok: false, message: `We couldn't send your message right now. Please try again shortly or email ${siteConfig.contact.email}.` },
      500,
    );
  }
}
