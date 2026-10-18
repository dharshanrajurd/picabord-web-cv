import Link from "next/link";
import { cacheLife } from "next/cache";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "What we do",
    links: [
      { href: "/services", label: "Services" },
      { href: "/solutions", label: "Safety analytics" },
      { href: "/iot", label: "IoT & edge" },
      { href: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/responsible-ai", label: "Responsible AI & privacy" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
] as const;

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-400">
            {siteConfig.tagline}. AI video analytics and custom vision, IoT and edge solutions for safer
            industrial sites. Built in India.
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-mist-400">
            <a className="block hover:text-cyan-300" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            <a className="block hover:text-cyan-300" href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
              {siteConfig.contact.phone}
            </a>
          </address>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mist-400 transition-colors hover:text-cyan-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-mist-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.legalName}. All rights reserved.
          </p>
          <p>We do not offer facial recognition.</p>
          {socials.length > 0 && (
            <ul className="flex gap-4">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} className="capitalize hover:text-cyan-300" rel="noopener noreferrer" target="_blank">
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
