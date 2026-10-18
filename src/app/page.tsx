import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/hero";
import { ButtonLink, CheckList, CtaBanner, FeatureCard, Section, SectionHeading } from "@/components/ui";
import { industries } from "@/content/industries";
import {
  IconArrowRight,
  IconBell,
  IconCamera,
  IconChip,
  IconEyeOff,
  IconReport,
  IconClock,
  IconShield,
} from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | AI Video Analytics for Industrial Safety` },
  description:
    "Turn your existing CCTV into a real-time safety system: PPE compliance, restricted zones, forklift proximity and fire/smoke detection with closed-loop alerts and audit-ready reports. No facial recognition.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    icon: <IconCamera className="size-5" />,
    title: "Connect your cameras",
    body: "We plug into the IP cameras you already have over RTSP/ONVIF. No rip-and-replace. Processing runs on-prem or on an edge device at your site.",
  },
  {
    icon: <IconBell className="size-5" />,
    title: "Detect and alert",
    body: "Models watch for the risks you choose. Each alert goes to a named owner, who acknowledges it. If nobody does, it escalates automatically.",
  },
  {
    icon: <IconReport className="size-5" />,
    title: "Prove compliance",
    body: "Every event, response and closure is logged. Export audit-ready reports by site, zone, shift or hazard type for EHS reviews and inspections.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="From camera feed to closed-out incident in three steps."
          intro="Built for plant heads, EHS and security teams who need fewer blind spots without adding more screens to watch."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <FeatureCard icon={s.icon} title={`${i + 1}. ${s.title}`}>
                {s.body}
              </FeatureCard>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="services-heading" className="border-y border-white/5 bg-ink-850/50">
        <SectionHeading
          id="services-heading"
          eyebrow="What we build"
          title="Ready-made safety analytics, or a solution built around your site."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="glass card-hover flex flex-col rounded-3xl p-7 sm:p-10" data-reveal>
            <div className="flex items-center gap-3 text-cyan-300">
              <IconShield className="size-6" />
              <p className="eyebrow">Products</p>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">Safety & compliance analytics</h3>
            <p className="mt-3 text-mist-300">
              Deployable detection modules with a closed-loop alert workflow and reporting built in.
            </p>
            <div className="mt-6">
              <CheckList
                items={[
                  "PPE compliance (helmets, vests and more)",
                  "Restricted-zone intrusion",
                  "Forklift-pedestrian proximity",
                  "Fire and smoke detection",
                  "Assigned, acknowledged and escalated alerts",
                ]}
              />
            </div>
            <ButtonLink href="/solutions" variant="ghost" withArrow className="mt-8 self-start">
              Explore safety analytics
            </ButtonLink>
          </article>
          <article className="glass card-hover flex flex-col rounded-3xl p-7 sm:p-10" data-reveal>
            <div className="flex items-center gap-3 text-cyan-300">
              <IconChip className="size-6" />
              <p className="eyebrow">Custom solutions</p>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">Engineered to your requirements</h3>
            <p className="mt-3 text-mist-300">
              When the problem is specific to your process, we design, prototype and deploy around it.
            </p>
            <div className="mt-6">
              <CheckList
                items={[
                  "Custom computer vision models",
                  "IoT sensors and gateways",
                  "Edge deployment on rugged hardware",
                  "Integration with your VMS, ERP, MES or ticketing",
                  "Pilot first, then scale",
                ]}
              />
            </div>
            <ButtonLink href="/services" variant="ghost" withArrow className="mt-8 self-start">
              See how we engage
            </ButtonLink>
          </article>
        </div>
      </Section>

      <Section labelledBy="industries-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="industries-heading" eyebrow="Industries" title="Made for sites where safety can't be an afterthought." />
          <ButtonLink href="/industries" variant="ghost" withArrow className="shrink-0">
            All industries
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <li key={ind.slug} data-reveal>
              <Link
                href={`/industries#${ind.slug}`}
                className="glass card-hover flex h-full flex-col items-start gap-4 rounded-2xl p-5"
              >
                <span className="text-cyan-300">{ind.icon}</span>
                <span className="font-display text-[0.95rem] font-semibold text-white">{ind.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="privacy-heading" className="pt-0 sm:pt-0">
        <div className="glass grid items-center gap-10 overflow-hidden rounded-3xl p-7 sm:p-12 lg:grid-cols-[1.2fr_1fr]" data-reveal>
          <div>
            <p className="eyebrow">Privacy by design</p>
            <h2 id="privacy-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
              We watch for hazards, not for faces.
            </h2>
            <p className="mt-4 text-mist-300 text-pretty sm:text-lg">
              We do not offer facial recognition. Video is processed on your premises wherever possible, retention is
              limited, and access is logged. Our approach is designed with India&apos;s Digital Personal Data Protection
              (DPDP) framework in mind.
            </p>
            <Link
              href="/responsible-ai"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-white"
            >
              Read our Responsible AI principles <IconArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: <IconEyeOff className="size-5" />, label: "No facial recognition" },
              { icon: <IconChip className="size-5" />, label: "On-prem & edge processing" },
              { icon: <IconClock className="size-5" />, label: "Configurable retention" },
              { icon: <IconShield className="size-5" />, label: "Role-based, logged access" },
            ].map((p) => (
              <li key={p.label} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-ink-950/40 p-4 text-sm font-medium text-white">
                <span className="text-cyan-300">{p.icon}</span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
