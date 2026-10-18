import { pageMetadata } from "@/lib/metadata";
import { ButtonLink, CheckList, CtaBanner, FeatureCard, PageHero, Section, SectionHeading } from "@/components/ui";
import {
  IconBell,
  IconCamera,
  IconChip,
  IconFlame,
  IconForklift,
  IconHelmet,
  IconLoop,
  IconPlug,
  IconReport,
  IconZone,
} from "@/components/icons";

export const metadata = pageMetadata({
  title: "Safety Analytics Solutions",
  description:
    "PPE compliance, restricted-zone intrusion, forklift-pedestrian proximity and fire/smoke detection on your existing RTSP/ONVIF cameras, with closed-loop alerts and audit-ready reports. On-prem or edge inference.",
  path: "/solutions",
});

const capabilities = [
  {
    icon: <IconHelmet className="size-5" />,
    title: "PPE compliance",
    body: "Detect missing helmets, high-visibility vests and other required gear. Set different PPE rules for different zones, so a paint shop and a loading dock each get the checks that apply to them.",
  },
  {
    icon: <IconZone className="size-5" />,
    title: "Restricted-zone intrusion",
    body: "Draw virtual zones on any camera view and set when they apply. Get alerts when someone enters hazardous areas, machine cells or after-hours perimeters.",
  },
  {
    icon: <IconForklift className="size-5" />,
    title: "Forklift-pedestrian proximity",
    body: "Flag when people and forklifts or other material-handling vehicles come too close in shared aisles, docks and yards. Near-miss data shows where layouts or rules need to change.",
  },
  {
    icon: <IconFlame className="size-5" />,
    title: "Fire and smoke detection",
    body: "Visual detection of flame and smoke in camera view adds an early-warning layer alongside your existing fire detection and suppression systems. It does not replace them.",
  },
  {
    icon: <IconLoop className="size-5" />,
    title: "Closed-loop alerts",
    body: "Every alert is assigned to an owner, who must acknowledge it within a time you set. Unacknowledged alerts escalate up the chain, so issues get closed rather than just flagged.",
  },
  {
    icon: <IconReport className="size-5" />,
    title: "Audit-ready reports",
    body: "Each event comes with an evidence snapshot, a timeline and its resolution. Export compliance trends by site, zone, shift or hazard type for EHS reviews and audits.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Safety analytics that close the loop."
        intro="Detection on its own just creates noise. Picabord ties each detection to an owner, a response deadline and an audit record, running on the cameras you already have."
      >
        <ButtonLink href="/contact?interest=demo" withArrow>
          Book a Demo
        </ButtonLink>
        <ButtonLink href="/contact?interest=pilot" variant="secondary">
          Request a Pilot
        </ButtonLink>
      </PageHero>

      <Section labelledBy="capabilities-heading">
        <SectionHeading id="capabilities-heading" eyebrow="Capabilities" title="What Picabord detects, and what happens next." />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title}>
              <FeatureCard icon={c.icon} title={c.title}>
                {c.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="loop-heading" className="border-y border-white/5 bg-ink-850/50">
        <SectionHeading
          id="loop-heading"
          eyebrow="Alert workflow"
          title="Detected → assigned → acknowledged → resolved."
          intro="Escalation rules make sure no alert is silently ignored."
        />
        <ol className="mt-12 grid gap-3 md:grid-cols-4">
          {[
            ["Detected", "The model flags an event and captures an evidence snapshot."],
            ["Assigned", "Routed to the zone owner by app, SMS, email or your messaging tools."],
            ["Acknowledged", "The owner confirms and acts. If they don't within the set time, it escalates."],
            ["Resolved & logged", "Closure notes and timestamps flow into reports and the audit trail."],
          ].map(([title, body], i) => (
            <li key={title} className="glass relative rounded-2xl p-6" data-reveal>
              <span className="font-display text-3xl font-semibold text-cyan-300/80" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="deploy-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="deploy-heading"
              eyebrow="Deployment"
              title="Your cameras. Your network. Your choice of where it runs."
              intro="No new cameras required in most cases. Video stays on your premises by default."
            />
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: <IconCamera className="size-5" />,
                title: "Existing IP cameras",
                body: "Connects to standard IP cameras and NVRs over RTSP and ONVIF. We review coverage, angles and resolution during discovery.",
              },
              {
                icon: <IconChip className="size-5" />,
                title: "On-prem or edge inference",
                body: "Run analytics on a server in your facility or on compact edge devices close to the cameras. That cuts bandwidth and keeps raw video local.",
              },
              {
                icon: <IconPlug className="size-5" />,
                title: "Integrations",
                body: "Push events to your VMS, ticketing, ERP/MES or messaging tools through APIs and webhooks.",
              },
              {
                icon: <IconBell className="size-5" />,
                title: "Notifications",
                body: "Alert channels and escalation chains are configurable per site, zone and shift.",
              },
            ].map((d) => (
              <div key={d.title} className="glass flex gap-4 rounded-2xl p-5" data-reveal>
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  {d.icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist-300">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="notfr-heading" className="pt-0 sm:pt-0">
        <div className="glass rounded-3xl p-7 sm:p-10" data-reveal>
          <h2 id="notfr-heading" className="font-display text-2xl font-semibold text-white">
            What we don&apos;t do
          </h2>
          <div className="mt-5 max-w-3xl">
            <CheckList
              items={[
                "No facial recognition. We detect objects, PPE, zones and events, not identities.",
                "No replacement for certified fire alarm or life-safety systems. We add a visual layer alongside them.",
                "No promises we haven't tested on your site. That's what the pilot is for.",
              ]}
            />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
