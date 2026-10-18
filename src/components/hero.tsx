import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { HeroHandsIllustration } from "@/components/hero-hands-illustration";

// Set at build/dev start by next.config.ts — true once public/hero-hands.jpg exists.
const hasHeroImage = process.env.NEXT_PUBLIC_HAS_HERO_IMAGE === "1";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950">
      {/* Phones: visual stacked above the copy. sm+: full-bleed behind it. */}
      <div className="hero-parallax relative h-[46svh] min-h-64 shrink-0 sm:absolute sm:inset-0 sm:-z-10 sm:h-auto">
        {hasHeroImage ? (
          <Image
            src="/hero-hands.jpg"
            alt="A human hand and a robotic hand reach toward each other, fingertips about to touch in a soft cyan glow."
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <HeroHandsIllustration className="absolute inset-0 h-full w-full sm:bottom-auto sm:h-[78%]" />
        )}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 to-transparent sm:hidden" />
      </div>

      {/* Legibility overlays (sm+) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent sm:block" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/80 to-transparent sm:-z-10 sm:h-40" />

      <div className="container-page relative -mt-8 pb-14 text-center sm:mt-auto sm:pt-32 sm:pb-20 lg:pb-24">
        <p className="eyebrow hidden sm:block">Industrial safety · AI video analytics</p>
        <h1
          id="hero-heading"
          className="mx-auto mt-5 max-w-4xl font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
        >
          Vision that keeps <span className="text-gradient">your people safe.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist-200 text-pretty sm:text-lg">
          Turn the cameras you already have into a real-time safety and operations system that spots hazards, alerts the
          right person, and keeps an audit trail of every response.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact?interest=demo" withArrow>
            Book a Demo
          </ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Explore Solutions
          </ButtonLink>
        </div>
        <p className="mt-8 text-xs text-mist-400">Works with existing IP cameras · On-prem or edge · No facial recognition</p>
      </div>
    </section>
  );
}
