import { pageMetadata } from "@/lib/metadata";
import { industries } from "@/content/industries";
import { CheckList, CtaBanner, PageHero, Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "AI video analytics for safety and compliance in manufacturing, warehousing and logistics, construction, chemicals and pharma, and energy and utilities.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different sites. The same goal: everyone goes home safe."
        intro="We configure detection rules, zones and alert routing around how your industry actually works, from fast-moving docks to controlled process areas."
      />

      <Section labelledBy="industries-list" className="pt-12 sm:pt-16">
        <h2 id="industries-list" className="sr-only">
          Industries we serve
        </h2>
        <div className="space-y-6">
          {industries.map((ind) => (
            <article
              key={ind.slug}
              id={ind.slug}
              aria-labelledby={`${ind.slug}-title`}
              className="glass grid scroll-mt-28 gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr_1fr]"
              data-reveal
            >
              <div>
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  {ind.icon}
                </div>
                <h3 id={`${ind.slug}-title`} className="mt-5 font-display text-2xl font-semibold text-white">
                  {ind.name}
                </h3>
                <p className="mt-3 leading-relaxed text-mist-300">{ind.summary}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white uppercase">Common risks</h4>
                <ul className="mt-4 space-y-2.5 text-mist-300">
                  {ind.risks.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white uppercase">How Picabord helps</h4>
                <div className="mt-4">
                  <CheckList items={ind.useCases} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner title="Don't see your industry? Ask us." intro="If people work around hazards and you have cameras on site, there's a good chance we can help. Tell us about your site and we'll tell you honestly whether it's a fit." />
    </>
  );
}
