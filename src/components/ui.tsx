import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IconArrowRight } from "@/components/icons";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  withArrow?: boolean;
};

const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 focus-visible:outline-offset-4";

const buttonVariants = {
  primary:
    "bg-cyan-400 text-ink-950 shadow-[0_0_0_1px_rgb(124_240_255/0.4),0_12px_40px_-12px_rgb(34_211_238/0.7)] hover:bg-cyan-300 hover:shadow-[0_0_0_1px_rgb(124_240_255/0.6),0_16px_48px_-12px_rgb(34_211_238/0.9)]",
  secondary: "glass text-white hover:border-cyan-400/50 hover:text-cyan-300",
  ghost: "text-cyan-300 hover:text-white px-0 min-h-0",
} as const;

export function ButtonLink({ variant = "primary", withArrow, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && (
        <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${alignment}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-mist-300 text-pretty sm:text-lg">{intro}</p>}
    </div>
  );
}

/** Top banner for inner pages. The h1 lives here. */
export function PageHero({ eyebrow, title, intro, children }: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="container-page relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300 text-pretty">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  as: Heading = "h3",
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div className="glass card-hover h-full rounded-2xl p-6 sm:p-7" data-reveal>
      {icon && (
        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
          {icon}
        </div>
      )}
      <Heading className="font-display text-lg font-semibold text-white">{title}</Heading>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-mist-300">{children}</div>
    </div>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-mist-300">
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBanner({
  title = "See it on your own cameras.",
  intro = "Book a 30-minute demo, or scope a pilot on a few of your existing camera streams. We'll show you exactly what gets detected, who gets alerted, and what ends up in the report.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="py-20 sm:py-28">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-950 px-6 py-14 text-center sm:px-12 sm:py-20"
          data-reveal
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-mist-300 text-pretty sm:text-lg">{intro}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact?interest=demo" withArrow>
                Book a Demo
              </ButtonLink>
              <ButtonLink href="/contact?interest=pilot" variant="secondary">
                Request a Pilot
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
