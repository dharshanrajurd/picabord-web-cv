import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CtaBanner, FeatureCard, PageHero, Section, SectionHeading } from "@/components/ui";
import { IconChip, IconClock, IconEyeOff, IconList, IconLock, IconMask, IconShield } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Responsible AI & Privacy",
  description:
    "Picabord does not offer facial recognition. Our safety analytics are built with privacy by design: on-device processing, retention limits, masking and access logs, designed with India's DPDP framework in mind.",
  path: "/responsible-ai",
});

const principles = [
  {
    icon: <IconEyeOff className="size-5" />,
    title: "No facial recognition",
    body: "We do not offer facial recognition or identify individuals by their face. Our models detect PPE, zones, vehicles, smoke and flame: the conditions that cause harm, not who someone is.",
  },
  {
    icon: <IconShield className="size-5" />,
    title: "Privacy by design",
    body: "Privacy decisions are made at design time, not bolted on later. Defaults favour collecting less, keeping it for less time, and showing it to fewer people.",
  },
  {
    icon: <IconChip className="size-5" />,
    title: "On-device processing",
    body: "Video is analysed on-prem or on edge devices at your site wherever possible. Typically only events, metadata and evidence snapshots leave the device. Continuous raw video is not streamed to the cloud.",
  },
  {
    icon: <IconClock className="size-5" />,
    title: "Retention limits",
    body: "Retention periods for event snapshots and logs are configurable. Data is deleted automatically when it expires, in line with your policies.",
  },
  {
    icon: <IconMask className="size-5" />,
    title: "Masking",
    body: "Privacy masks can block out areas that should never be analysed or recorded. Where supported, people in evidence snapshots can be blurred for viewers who don't need to see them.",
  },
  {
    icon: <IconList className="size-5" />,
    title: "Access logs",
    body: "Access is role-based. Viewing, exporting and configuration changes are logged, so you can always see who accessed what and when.",
  },
];

export default function ResponsibleAiPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible AI & Privacy"
        title="Safety monitoring that respects the people it protects."
        intro="Workers should feel protected by safety technology, not watched by it. These are the principles we build to."
      />

      <Section labelledBy="principles-heading">
        <SectionHeading id="principles-heading" eyebrow="Principles" title="How we handle video and data." />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title}>
              <FeatureCard icon={p.icon} title={p.title}>
                {p.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="dpdp-heading" className="border-y border-white/5 bg-ink-850/50">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="dpdp-heading"
            eyebrow="India's DPDP framework"
            title="Designed with the DPDP Act and Rules in mind."
          />
          <div className="space-y-5 leading-relaxed text-mist-300" data-reveal>
            <p>
              Our product is designed with India&apos;s Digital Personal Data Protection Act, 2023 and the DPDP Rules in mind.
              Features like purpose limitation, data minimisation, retention controls and access logging help our customers
              meet their own obligations as data fiduciaries.
            </p>
            <p>
              Compliance ultimately depends on how a system is configured and operated, including notices to workers, lawful
              purpose and internal policies. We work with your legal, HR and EHS teams during deployment to help get this
              right. We do not claim certifications we have not obtained.
            </p>
            <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-ink-950/40 p-5 text-sm">
              <IconLock className="mt-0.5 size-5 shrink-0 text-cyan-300" />
              <p>
                This page describes our design approach. It is not legal advice. For how we handle data submitted through this
                website, see our{" "}
                <Link href="/privacy-policy" className="font-semibold text-cyan-300 underline-offset-4 hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="deploy-practices-heading">
        <SectionHeading
          id="deploy-practices-heading"
          eyebrow="In practice"
          title="What we recommend for every deployment."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            "Tell workers clearly what is monitored, why, and who sees the results.",
            "Use detections for safety improvement and coaching, not covert surveillance.",
            "Keep humans in the loop: alerts are reviewed and acted on by people.",
            "Review alert quality regularly and retire rules that create noise.",
          ].map((t, i) => (
            <li key={t} className="glass flex gap-4 rounded-2xl p-6" data-reveal>
              <span className="font-display text-2xl font-semibold text-cyan-300" aria-hidden="true">
                {i + 1}
              </span>
              <p className="text-mist-300">{t}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner title="Questions about privacy? We're happy to go deep." intro="Book a session with our team to walk through data flows, retention settings and access controls for your deployment." />
    </>
  );
}
