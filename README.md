# Picabord — marketing website

Multi-page marketing site for Picabord (AI video analytics for industrial safety, plus custom vision / IoT / edge solutions).
Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**, ready to deploy on **Vercel**.

## Run locally

Requires Node.js 20.9+ (22 LTS recommended).

```bash
npm install
cp .env.example .env.local   # then fill in values (optional for local dev)
npm run dev                  # http://localhost:3000
```

Other scripts:

| Command         | What it does                                   |
| --------------- | ---------------------------------------------- |
| `npm run build` | Production build (type-checks and prerenders)  |
| `npm start`     | Serve the production build                     |
| `npm run lint`  | ESLint                                         |

## Project layout

```
src/
  config/site.ts          ← ALL company details (name, email, phone, address, socials, nav)
  app/                    ← routes: /, /services, /solutions, /iot, /industries,
                            /case-studies, /about, /responsible-ai, /contact, /privacy-policy
    api/contact/route.ts  ← contact form handler (Resend)
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg, not-found.tsx
  components/             ← header, footer, hero, SVG illustration, diagram, form, UI primitives
  content/industries.tsx  ← industry copy (shared by Home and Industries)
  lib/                    ← metadata helper, shared contact validation
```

## Add the hero image

The home hero shows an original SVG illustration until a real photo is present.

1. Save your image as **`public/hero-hands.jpg`**. Use a wide (about 16:9 or wider), dark, high-contrast shot,
   at least 2400 px wide. Keep the fingertips near the horizontal centre and the upper-middle of the frame,
   because the headline sits over the lower third.
2. Restart `npm run dev` (or redeploy). The check runs when Next.js starts (see `next.config.ts`), and the hero switches
   to the photo automatically via `next/image` (AVIF/WebP, responsive sizes, preloaded).
3. To change the alt text, edit `src/components/hero.tsx`.

## Contact form email (Resend)

The form posts to `/api/contact`, which validates input server-side (plus a honeypot and a minimum-fill-time check)
and emails the submission via [Resend](https://resend.com).

1. Create a Resend account and an API key at <https://resend.com/api-keys>.
2. Add it to `.env.local` for local development:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```
3. **Verify your domain in Resend** (Domains → Add domain → add the DNS records), then set a sender on that domain:
   ```
   CONTACT_FROM_EMAIL="Picabord Website <website@yourdomain.com>"
   ```
   Without a verified domain, Resend's test sender `onboarding@resend.dev` only delivers to the address that owns the Resend account.
4. Submissions go to `contact.email` in `src/config/site.ts`, or to `CONTACT_TO_EMAIL` if set.

If `RESEND_API_KEY` is missing, the submission is logged to the server console (Vercel → Logs) and the visitor sees a
clear message asking them to also email you directly.

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/<you>/picabord-web.git
   git push -u origin main
   ```
2. **Import in Vercel**: go to <https://vercel.com/new>, pick the repository and keep the detected **Next.js** defaults
   (build command `next build`, no output directory override).
3. **Add environment variables** (Project → Settings → Environment Variables), for Production and Preview:
   - `RESEND_API_KEY` (required for email)
   - `CONTACT_FROM_EMAIL` (sender on your verified domain)
   - `CONTACT_TO_EMAIL` (optional)
   - `NEXT_PUBLIC_SITE_URL`, e.g. `https://www.picabord.com` (used for canonical URLs, Open Graph, sitemap and robots.txt)

   Redeploy after adding or changing variables.
4. **Attach a custom domain**: Project → Settings → Domains → add `picabord.com` and `www.picabord.com`, then create the DNS
   records Vercel shows at your registrar (an `A` record for the apex, a `CNAME` for `www`). Choose one as primary and
   redirect the other. HTTPS certificates are issued automatically. Make sure `NEXT_PUBLIC_SITE_URL` matches the primary domain.

## Notes

- **Motion**: hero glow, particles and parallax, plus scroll reveals, are pure CSS (scroll-driven animations where supported)
  and are disabled under `prefers-reduced-motion`. The only client JavaScript is the mobile menu and the contact form.
- **Rate limiting** in the contact route is in-memory and per serverless instance. For strict limits, use a shared store
  such as Upstash Redis or Vercel KV.
- **Case studies and team** are clearly labelled placeholders. Don't publish client names, logos, quotes or metrics without written approval.
- **Privacy policy** is a starting template; have it reviewed by counsel.
