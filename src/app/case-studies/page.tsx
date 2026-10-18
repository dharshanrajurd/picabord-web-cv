import { pageMetadata } from "@/lib/metadata";
import { CtaBanner, PageHero, Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Case studies of Picabord AI safety analytics deployments are coming soon. Contact us to discuss references or run a pilot on your own site.",
  path: "/case-studies",
});

// PLACEHOLDERS ONLY. Replace each entry with a real, client-approved case study.
// Do not publish client names, logos, quotes or metrics without written permission.
const placeholders = [
  { sector: "Manufacturing", focus: "PPE compliance", template: "Placeholder case study 1" },
  { sector: "Warehousing & Logistics", focus: "Forklift-pedestrian proximity", template: "Placeholder case study 2" },
  { sector: "Construction", focus: "Restricted-zone intrusion", template: "Placeholder case study 3" },
  { sector: "Chemicals & Pharma", focus: "Fire and smoke detection", template: "Placeholder case study 4" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Case studies are coming soon."
        intro="We only publish results our clients have approved. Until then, the cards below are placeholders showing what each case study will cover. Want to see the system in action? Ask for a demo or a pilot on your own cameras."
      />

      <Section labelledBy="cs-heading" className="pt-12 sm:pt-16">
        <h2 id="cs-heading" className="sr-only">
          Placeholder case studies
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {placeholders.map((p) => (
            <li key={p.template}>
              <article
                className="flex h-full flex-col rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-7 sm:p-9"
                aria-label={`${p.template} (placeholder)`}
                data-reveal
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="placeholder-badge">Placeholder · not a real project</span>
                  <span className="text-xs text-mist-400">{p.sector}</span>
                </div>
                <div
                  aria-hidden="true"
                  className="mt-6 flex aspect-[16/9] items-center justify-center rounded-2xl border border-white/[0.06] bg-ink-850 text-sm text-mist-400"
                >
                  Image placeholder
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{p.template}</h3>
                <p className="mt-1 text-sm text-cyan-300">Focus: {p.focus}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  {["Challenge", "Approach", "Outcome"].map((k) => (
                    <div key={k}>
                      <dt className="font-semibold text-white">{k}</dt>
                      <dd className="text-mist-400">[To be added once approved by the client]</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner title="Be one of our first published case studies." />
    </>
  );
}
