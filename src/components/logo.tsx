import { siteConfig } from "@/config/site";

/** Placeholder wordmark — swap the SVG mark for your real logo when ready. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7cf0ff" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill="#0e172a" stroke="url(#logo-g)" strokeWidth="1.5" />
        <path d="M6 20c3-6 7-9 10-9s7 3 10 9" fill="none" stroke="url(#logo-g)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="17" r="3" fill="#7cf0ff" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-[0.14em] text-white uppercase">{siteConfig.name}</span>
    </span>
  );
}
