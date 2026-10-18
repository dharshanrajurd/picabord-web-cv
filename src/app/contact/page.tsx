import { Suspense } from "react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { ContactForm, ContactFormFromParams } from "@/components/contact-form";
import { CheckList } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Contact — Book a Demo or Request a Pilot",
  description:
    "Book a demo of Picabord's AI safety analytics, request a pilot on your existing cameras, or discuss a custom computer vision, IoT or edge project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-heading" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-heading" className="mt-4 font-display text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl">
            Book a demo or request a pilot.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist-300">
            Tell us about your site and what you&apos;d like to detect. We&apos;ll reply within one to two business days.
          </p>
          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold text-white">What happens next</h2>
            <div className="mt-4">
              <CheckList
                items={[
                  "A short call to understand your site, cameras and priorities",
                  "A tailored demo using scenarios relevant to your industry",
                  "If it's a fit, a scoped pilot on a few of your existing cameras",
                ]}
              />
            </div>
          </div>
          <div className="mt-10 space-y-2 text-sm text-mist-400">
            <p>
              Prefer email?{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-cyan-300 hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-cyan-300 hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="relative">
          <Suspense fallback={<ContactForm />}>
            <ContactFormFromParams />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
