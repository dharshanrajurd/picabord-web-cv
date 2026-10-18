import { contactInterests } from "@/config/site";

/** Shared by the client form and the /api/contact route handler. */
export type ContactPayload = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

export type ContactField = keyof ContactPayload;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const contactLimits: Record<ContactField, number> = {
  name: 100,
  company: 120,
  role: 100,
  phone: 20,
  email: 254,
  interest: 60,
  message: 4000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Allows +, spaces, dashes, brackets; requires 7–15 digits (E.164 range).
const PHONE_CHARS_RE = /^[+()\-\s\d]+$/;

export function normalizeContact(input: Record<string, unknown>): ContactPayload {
  const get = (k: ContactField) => (typeof input[k] === "string" ? (input[k] as string).trim() : "");
  return {
    name: get("name"),
    company: get("company"),
    role: get("role"),
    phone: get("phone"),
    email: get("email").toLowerCase(),
    interest: get("interest"),
    message: get("message"),
  };
}

export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (data.company.length < 2) errors.company = "Please enter your company name.";
  if (data.role.length < 2) errors.role = "Please enter your role.";

  const digits = data.phone.replace(/\D/g, "");
  if (!data.phone) errors.phone = "Please enter a phone number.";
  else if (!PHONE_CHARS_RE.test(data.phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Please enter a valid phone number, e.g. +91 98765 43210.";

  if (!data.email) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";

  if (!(contactInterests as readonly string[]).includes(data.interest))
    errors.interest = "Please choose what you're interested in.";

  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  for (const key of Object.keys(contactLimits) as ContactField[]) {
    if (!errors[key] && data[key].length > contactLimits[key]) {
      errors[key] = `Please keep this under ${contactLimits[key]} characters.`;
    }
  }

  return errors;
}
