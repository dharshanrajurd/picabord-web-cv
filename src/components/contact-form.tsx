"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { contactInterests, siteConfig } from "@/config/site";
import {
  contactLimits,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string; delivered: boolean }
  | { kind: "error"; message: string };

const interestFromParam: Record<string, string> = {
  demo: "Book a demo",
  pilot: "Request a pilot",
  partner: "System integrator partnership",
  custom: "Custom computer vision solution",
  iot: "IoT and edge integration",
};

const inputClass =
  "mt-2 block w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-[0.95rem] text-white placeholder:text-mist-400/70 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 aria-[invalid=true]:border-red-400";

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: ContactField;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label} <span className="text-cyan-300" aria-hidden="true">*</span>
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-mist-400">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

/** Reads ?interest= from the URL to preselect the dropdown. */
export function ContactFormFromParams() {
  const param = useSearchParams().get("interest") ?? "";
  const interest = interestFromParam[param] ?? "";
  return <ContactForm key={interest} defaultInterest={interest} />;
}

export function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef<number | null>(null);

  const describedBy = (id: ContactField, hasHint = false) =>
    errors[id] ? `${id}-error` : hasHint ? `${id}-hint` : undefined;

  function readForm(form: HTMLFormElement) {
    return normalizeContact(Object.fromEntries(new FormData(form)));
  }

  function onBlurValidate(e: React.FocusEvent<HTMLFormElement>) {
    const name = (e.target as Element).getAttribute("name") as ContactField | null;
    if (!name || !(name in contactLimits) || !errors[name]) return;
    // Re-check a field that already shows an error so it clears once fixed.
    const next = validateContact(readForm(e.currentTarget));
    setErrors((prev) => ({ ...prev, [name]: next[name] }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = readForm(form);
    const clientErrors = validateContact(data);
    setErrors(clientErrors);

    const firstInvalid = (Object.keys(contactLimits) as ContactField[]).find((k) => clientErrors[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          website: (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "",
          elapsedMs: startedAt.current ? Date.now() - startedAt.current : 0,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
        errors?: ContactErrors;
      };

      if (res.ok && json.ok) {
        setStatus({ kind: "success", delivered: json.delivered !== false, message: json.message ?? "" });
        form.reset();
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }
      if (json.errors) setErrors(json.errors);
      setStatus({
        kind: "error",
        message: json.message ?? "Something went wrong sending your message. Please try again.",
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setStatus({
        kind: "error",
        message: `We couldn't reach the server. Check your connection and try again, or email us at ${siteConfig.contact.email}.`,
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  if (status.kind === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="glass rounded-3xl p-8 text-center sm:p-12"
      >
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-white">Thank you, we&apos;ve got your message.</h2>
        <p className="mx-auto mt-3 max-w-md text-mist-300">
          {status.delivered
            ? "Someone from our team will get back to you within one to two business days."
            : status.message}
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-7 inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold text-cyan-300 hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      onBlur={onBlurValidate}
      onFocusCapture={() => {
        if (startedAt.current === null) startedAt.current = Date.now();
      }}
      className="glass rounded-3xl p-6 sm:p-10"
      aria-describedby="form-required-note"
    >
      <p id="form-required-note" className="mb-6 text-sm text-mist-400">
        All fields are required.
      </p>

      {status.kind === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200"
        >
          {status.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={contactLimits.name}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            maxLength={contactLimits.company}
            aria-invalid={!!errors.company}
            aria-describedby={describedBy("company")}
            className={inputClass}
          />
        </Field>
        <Field id="role" label="Role" error={errors.role}>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            required
            maxLength={contactLimits.role}
            placeholder="e.g. EHS Manager"
            aria-invalid={!!errors.role}
            aria-describedby={describedBy("role")}
            className={inputClass}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone} hint="Include country code, e.g. +91">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={contactLimits.phone}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone", true)}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Work email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={contactLimits.email}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
        </Field>
        <Field id="interest" label="I'm interested in" error={errors.interest}>
          <select
            id="interest"
            name="interest"
            required
            defaultValue={defaultInterest}
            aria-invalid={!!errors.interest}
            aria-describedby={describedBy("interest")}
            className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237cf0ff' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {contactInterests.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={contactLimits.message}
              placeholder="Tell us about your site, cameras and what you'd like to detect."
              aria-invalid={!!errors.message}
              aria-describedby={describedBy("message")}
              className={`${inputClass} resize-y`}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mist-400">
          By submitting, you agree to our handling of your data as described in our{" "}
          <Link href="/privacy-policy" className="text-cyan-300 underline-offset-4 hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 text-sm font-semibold text-ink-950 transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-70"
        >
          {submitting && (
            <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="3" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
          {submitting ? "Sending…" : "Send message"}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {submitting ? "Sending your message" : ""}
      </p>
    </form>
  );
}
