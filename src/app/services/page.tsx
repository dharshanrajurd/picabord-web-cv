import { pageMetadata } from "@/lib/metadata";
import { ButtonLink, CheckList, CtaBanner, Section, SectionHeading, PageHero } from "@/components/ui";
import { IconChip, IconLifebuoy, IconRocket, IconSearch, IconShield, IconWrench, IconFlask } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Two ways to work with Picabord: deploy our AI safety analytics products on your existing cameras, or have us build a custom computer vision, IoT or edge solution — from discovery to pilot to support.",
  path: "/services",
});

const engagementSteps = [
  {
    icon: <IconSearch className="size-5" />,
    title: "Discover",
    body: "We walk your site (in person or over video), review camera coverage and network, and agree on the risks that matter and how success will be measured.",
  },
  {
    icon: <IconFlask className="size-5" />,
    title: "Prototype",
    body: "We test detection on recorded footage from your site, tune models for your lighting, angles and PPE, and review results with your team.",
  },
  {
    icon: <IconShield className="size-5" />,
    title: "Pilot",
    body: "A time-boxed live run on a small set of cameras, with real alert routing to your people. We measure against the goals agreed during discovery.",
  },
  {
    icon: <IconRocket className="size-5" />,
    title: "Deploy",
    body: "Roll out across zones and sites on-prem or at the edge, set up integrations, and train supervisors and responders.",
  },
  {
    icon: <IconLifebuoy className="size-5" />,
    title: "Support",
    body: "Ongoing monitoring of system health, model updates, new use cases and periodic reviews of alert quality.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Products you can deploy now. Solutions built to your brief."
        intro="Start with our safety analytics on your existing cameras, or bring us a problem nobody has packaged yet. Either way, you get a pilot before you commit to a rollout."
      >
        <ButtonLink href="/contact?interest=pilot" withArrow>
          Request a Pilot
        </ButtonLink>
        <ButtonLink href="/contact?interest=demo" variant="secondary">
          Book a Demo
        </ButtonLink>
      </PageHero>

      <Section labelledBy="tracks-heading">
        <SectionHeading id="tracks-heading" eyebrow="Two tracks" title="Choose the starting point that fits." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article id="products" className="glass scroll-mt-28 rounded-3xl p-7 sm:p-10" data-reveal>
            <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
              <IconShield className="size-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">Products</h3>
            <p className="mt-3 text-mist-300">
              Ready-to-deploy AI video analytics for industrial safety and compliance. Configure rules per zone, route alerts
              to the right owner, and report on everything.
            </p>
            <div className="mt-6">
              <CheckList
                items={[
                  "PPE compliance detection",
                  "Restricted-zone intrusion",
                  "Forklift-pedestrian proximity",
                  "Fire and smoke detection",
                  "Closed-loop alerts: assign, acknowledge, escalate",
                  "Audit-ready reports and dashboards",
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-mist-400">
              Best for: plant heads and EHS teams who want proven use cases running quickly.
            </p>
            <ButtonLink href="/solutions" variant="ghost" withArrow className="mt-6">
              See capabilities
            </ButtonLink>
          </article>

          <article id="custom" className="glass scroll-mt-28 rounded-3xl p-7 sm:p-10" data-reveal>
            <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
              <IconWrench className="size-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">Custom Solutions</h3>
            <p className="mt-3 text-mist-300">
              Engineering built around your process: we scope it, build it, and deploy it on hardware that suits your
              site.
            </p>
            <div className="mt-6">
              <CheckList
                items={[
                  "Custom computer vision (process, quality and safety use cases)",
                  "IoT: sensors, gateways and telemetry",
                  "Edge deployment and device management",
                  "System integrations: VMS, ERP, MES, ticketing, messaging",
                  "Dashboards tailored to your workflows",
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-mist-400">
              Best for: operations heads and system integrators with a specific problem or an existing platform to extend.
            </p>
            <ButtonLink href="/iot" variant="ghost" withArrow className="mt-6">
              Explore IoT & edge
            </ButtonLink>
          </article>
        </div>
      </Section>

      <Section labelledBy="process-heading" className="border-y border-white/5 bg-ink-850/50">
        <SectionHeading
          id="process-heading"
          eyebrow="Engagement process"
          title="Low-risk by design: prove it on a pilot, then scale."
          intro="Each stage ends with a clear go or no-go decision, so you're never locked into a rollout before you've seen results on your own site."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {engagementSteps.map((step, i) => (
            <li key={step.title} className="glass relative rounded-2xl p-6" data-reveal>
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  {step.icon}
                </span>
                <span className="font-display text-sm font-semibold text-mist-400" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="si-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            id="si-heading"
            eyebrow="For system integrators"
            title="Add AI safety analytics to the projects you already deliver."
            intro="We work alongside integrators: you own the customer relationship and infrastructure, and we provide the analytics, model tuning and technical support."
          />
          <div className="glass rounded-3xl p-7 sm:p-9" data-reveal>
            <div className="flex items-center gap-3 text-cyan-300">
              <IconChip className="size-6" />
              <h3 className="font-display text-lg font-semibold text-white">What partners get</h3>
            </div>
            <div className="mt-5">
              <CheckList
                items={[
                  "Works with standard IP cameras and common VMS setups",
                  "Technical pre-sales and site-survey support",
                  "Deployment guides and integration APIs",
                  "Joint pilots with your customers",
                ]}
              />
            </div>
            <ButtonLink href="/contact?interest=partner" variant="secondary" className="mt-7">
              Talk partnerships
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
