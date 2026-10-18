import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="container-page relative text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          This zone is off the map.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-mist-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to safe ground.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
