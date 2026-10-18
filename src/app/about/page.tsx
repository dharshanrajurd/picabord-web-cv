import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { CtaBanner, FeatureCard, PageHero, Section, SectionHeading } from "@/components/ui";
import { IconEyeOff, IconLoop, IconSearch, IconUser, IconWrench } from "@/components/icons";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Picabord is an India-based team building AI video analytics and custom vision, IoT and edge solutions that make industrial workplaces safer. Our mission, approach and team.",
  path: "/about",
});

// PLACEHOLDERS — replace with real team members (name, role, short bio, optional photo in /public/team/).
const team = [
  { name: "[Team member name]", role: "[Founder & CEO]" },
  { name: "[Team member name]", role: "[CTO / Head of Engineering]" },
  { name: "[Team member name]", role: "[Head of Computer Vision]" },
  { name: "[Team member name]", role: "[Head of Customer Success]" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${siteConfig.name}`}
        title={`${siteConfig.tagline}.`}
        intro="We're an India-based team of engineers who build computer vision, IoT and edge systems for the places where work is physical and the stakes are high."
      />

      <Section labelledBy="mission-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="mission-heading"
            eyebrow="Mission"
            title="Help every industrial site see risk early and act on it fast."
          />
          <div className="space-y-5 text-lg leading-relaxed text-mist-300" data-reveal>
            <p>
              Most industrial sites already have cameras, but almost nobody watches them in real time. Hazards are found after
              the fact, if at all. We think that footage should be working for the people on the floor.
            </p>
            <p>
              We build practical AI that runs on existing infrastructure, respects privacy, and fits into how safety teams
              already work, with clear ownership of every alert and a record of every response.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="approach-heading" className="border-y border-white/5 bg-ink-850/50">
        <SectionHeading id="approach-heading" eyebrow="Approach" title="How we work." />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <FeatureCard icon={<IconSearch className="size-5" />} title="Start on the floor">
              We begin with your site, your cameras and your risks, not a generic feature list.
            </FeatureCard>
          </li>
          <li>
            <FeatureCard icon={<IconLoop className="size-5" />} title="Pilot before scale">
              Every engagement proves value on a small set of cameras before any wider rollout.
            </FeatureCard>
          </li>
          <li>
            <FeatureCard icon={<IconEyeOff className="size-5" />} title="Privacy by default">
              No facial recognition, local processing and minimal retention are defaults, not add-ons.
            </FeatureCard>
          </li>
          <li>
            <FeatureCard icon={<IconWrench className="size-5" />} title="Engineer for reality">
              Dust, glare, night shifts and patchy networks are the norm. We design for them.
            </FeatureCard>
          </li>
        </ul>
      </Section>

      <Section labelledBy="team-heading">
        <SectionHeading
          id="team-heading"
          eyebrow="Team"
          title="The people behind Picabord."
          intro={<span className="placeholder-badge">Placeholder profiles. To be replaced.</span>}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={i} className="glass rounded-2xl p-6 text-center" data-reveal>
              <div
                aria-hidden="true"
                className="mx-auto flex size-24 items-center justify-center rounded-full border border-dashed border-white/20 bg-ink-850 text-mist-400"
              >
                <IconUser className="size-10" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-mist-400">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner title="Let's talk about your site." />
    </>
  );
}
