/**
 * Single source of truth for company details.
 * Every value marked `TODO` is a placeholder — see README "Placeholders to replace".
 */

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Picabord",
  legalName: "Picabord", // TODO: registered legal entity name, e.g. "Picabord Technologies Pvt. Ltd."
  tagline: "Built for Every Horizon",
  description:
    "Picabord builds AI video analytics for industrial safety and compliance — PPE, restricted zones, forklift proximity and fire/smoke detection on the cameras you already have — plus custom computer vision, IoT and edge solutions. No facial recognition.",
  url: resolveSiteUrl().replace(/\/$/, ""),
  locale: "en_IN",

  contact: {
    // Inbox that receives contact-form submissions (can be overridden with CONTACT_TO_EMAIL).
    email: "hello@example.com", // TODO: replace with your real inbox
    phone: "+91 00000 00000", // TODO: replace with your real phone number
    address: {
      street: "", // TODO: street address (optional)
      city: "", // TODO: city
      region: "", // TODO: state
      postalCode: "", // TODO: PIN code
      country: "India",
    },
  },

  social: {
    linkedin: "", // TODO: e.g. https://www.linkedin.com/company/picabord
    x: "", // TODO: optional
    youtube: "", // TODO: optional
  },

  // Dates shown on legal pages.
  legal: {
    privacyPolicyUpdated: "2026-10-18",
    grievanceOfficer: "[Grievance Officer name]", // TODO
  },
} as const;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/iot", label: "IoT" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/responsible-ai", label: "Responsible AI" },
] as const;

export const contactInterests = [
  "Book a demo",
  "Request a pilot",
  "Safety analytics product",
  "Custom computer vision solution",
  "IoT and edge integration",
  "System integrator partnership",
  "Other",
] as const;

export type ContactInterest = (typeof contactInterests)[number];
