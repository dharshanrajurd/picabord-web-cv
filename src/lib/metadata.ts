import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// Per-page openGraph objects replace (not merge) the parent's, so re-attach the shared OG image.
const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` };

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Builds unique per-page metadata with canonical URL and Open Graph / Twitter tags. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
