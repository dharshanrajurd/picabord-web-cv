import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects personal data submitted through this website.`,
  path: "/privacy-policy",
});

const updated = new Date(`${siteConfig.legal.privacyPolicyUpdated}T00:00:00Z`).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function PrivacyPolicyPage() {
  const { email } = siteConfig.contact;
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro={`Last updated ${updated}. This policy explains how ${siteConfig.legalName} handles personal data collected through this website.`}
      />
      <div className="container-page py-16 sm:py-20">
        <div className="mb-10 max-w-3xl rounded-2xl border border-dashed border-cyan-400/40 p-5 text-sm text-mist-300">
          <strong className="text-white">Template notice:</strong> this is a starting template. Have it reviewed by
          qualified counsel and adjust it to your actual practices before relying on it.
        </div>
        <article className="max-w-3xl space-y-10 leading-relaxed text-mist-300 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_p+p]:mt-3">
          <section>
            <h2>1. Who we are</h2>
            <p className="mt-3">
              {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is based in India and operates this website at{" "}
              {siteConfig.url}. For privacy questions, contact us at{" "}
              <a className="text-cyan-300 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2>2. Data we collect</h2>
            <ul>
              <li>
                <strong className="text-white">Contact form:</strong> name, company, role, phone number, email address, area
                of interest and your message.
              </li>
              <li>
                <strong className="text-white">Technical data:</strong> standard server logs such as IP address, browser type
                and pages requested, kept for security and troubleshooting.
              </li>
            </ul>
            <p>This website does not use advertising or cross-site tracking cookies.</p>
          </section>
          <section>
            <h2>3. Why we use it</h2>
            <ul>
              <li>To respond to your enquiry, arrange demos or pilots, and follow up on your request.</li>
              <li>To keep the website secure and prevent spam or abuse.</li>
            </ul>
            <p>
              We process contact-form data on the basis of the consent you give by submitting the form. You can withdraw
              consent at any time by emailing us.
            </p>
          </section>
          <section>
            <h2>4. Sharing</h2>
            <p className="mt-3">
              We do not sell personal data. We share it only with service providers who help us run this website and deliver
              email (for example, our hosting and email delivery providers), under appropriate contractual safeguards, or when
              required by law.
            </p>
          </section>
          <section>
            <h2>5. Retention</h2>
            <p className="mt-3">
              We keep enquiry data only as long as needed to respond and maintain a reasonable business record, then delete
              it. {/* TODO: state your actual retention period, e.g. 24 months */}
            </p>
          </section>
          <section>
            <h2>6. Your rights</h2>
            <p className="mt-3">
              Subject to applicable law, including India&apos;s Digital Personal Data Protection Act, 2023, you may request
              access to, correction of, or erasure of your personal data, and you may nominate another person to exercise
              your rights. To make a request, email{" "}
              <a className="text-cyan-300 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2>7. Grievance redressal</h2>
            <p className="mt-3">
              Grievance Officer: {siteConfig.legal.grievanceOfficer}, reachable at{" "}
              <a className="text-cyan-300 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>
              . If you are not satisfied with our response, you may approach the Data Protection Board of India.
            </p>
          </section>
          <section>
            <h2>8. Our products</h2>
            <p className="mt-3">
              This policy covers this website only. For how our video analytics products handle data, see{" "}
              <Link className="text-cyan-300 hover:underline" href="/responsible-ai">
                Responsible AI &amp; Privacy
              </Link>{" "}
              and the agreement with your organisation.
            </p>
          </section>
          <section>
            <h2>9. Changes</h2>
            <p className="mt-3">We may update this policy. The &ldquo;last updated&rdquo; date above shows when it last changed.</p>
          </section>
        </article>
      </div>
    </>
  );
}
