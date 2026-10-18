import { existsSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";

// The hero shows public/hero-hands.jpg when present, otherwise an SVG illustration.
// Evaluated when `next dev` / `next build` starts — restart dev after adding the image.
const hasHeroImage = existsSync(join(process.cwd(), "public", "hero-hands.jpg"));

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_HAS_HERO_IMAGE: hasHeroImage ? "1" : "0",
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
