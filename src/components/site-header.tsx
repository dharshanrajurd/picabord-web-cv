"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/config/site";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link href="/" className="shrink-0 rounded-lg" aria-label="Picabord home" onClick={close}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="rounded-full px-3 py-2 text-sm font-medium text-mist-300 transition-colors hover:text-white aria-[current=page]:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact?interest=demo"
              className="hidden min-h-10 items-center rounded-full bg-cyan-400 px-5 text-sm font-semibold text-ink-950 transition hover:bg-cyan-300 sm:inline-flex"
            >
              Book a Demo
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-white transition hover:bg-white/5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...mainNav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href} className="border-b border-white/[0.06]">
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex min-h-14 items-center font-display text-xl text-white aria-[current=page]:text-cyan-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?interest=demo"
            onClick={close}
            className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-cyan-400 font-semibold text-ink-950"
          >
            Book a Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
