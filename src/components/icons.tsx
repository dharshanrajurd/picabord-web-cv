import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconCamera = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h9A1.5 1.5 0 0 1 15 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5z" />
    <path d="m15 11 5-3v8l-5-3" />
  </Base>
);
export const IconBell = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Base>
);
export const IconReport = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Base>
);
export const IconHelmet = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 16a8 8 0 0 1 16 0" />
    <path d="M3 16h18v2H3zM12 8V5M9 9l-1-3M15 9l1-3" />
  </Base>
);
export const IconZone = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4h16v16H4z" strokeDasharray="3 3" />
    <path d="M12 8v5M12 16h.01" />
  </Base>
);
export const IconForklift = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 17V9h6l3 5v3" />
    <path d="M15 4v13h6" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="12" cy="18" r="2" />
  </Base>
);
export const IconFlame = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21c4 0 7-2.7 7-6.5 0-3-2-5.5-4-7.5 0 2.5-1.5 4-3 4 0-3-1-6-4-8 .5 3-3 5.5-3 10C5 18 8 21 12 21z" />
  </Base>
);
export const IconLoop = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 9" />
    <path d="M20 4v5h-5" />
    <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15" />
    <path d="M4 20v-5h5" />
  </Base>
);
export const IconChip = (p: IconProps) => (
  <Base {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </Base>
);
export const IconSensor = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="2" />
    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
  </Base>
);
export const IconGateway = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    <path d="M7 16.5h.01M11 16.5h.01M12 13V8M8.5 6.5a5 5 0 0 1 7 0M6 4a8.5 8.5 0 0 1 12 0" />
  </Base>
);
export const IconDashboard = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 14l2.5-2.5 2.5 2 3.5-3.5" />
  </Base>
);
export const IconPlug = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" />
  </Base>
);
export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);
export const IconEyeOff = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 3l18 18M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 8.5 4 9.5 6a13 13 0 0 1-2.6 3.4M6.3 7.6A13.4 13.4 0 0 0 2.5 12c1 2 4.5 6 9.5 6a9.6 9.6 0 0 0 4.2-1" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </Base>
);
export const IconLock = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Base>
);
export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);
export const IconMask = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
    <path d="M7 6h10v4H7z" fill="currentColor" stroke="none" opacity=".45" />
  </Base>
);
export const IconList = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
  </Base>
);
export const IconFactory = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17z" />
    <path d="M7 17h2M12 17h2" />
  </Base>
);
export const IconBox = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
  </Base>
);
export const IconCrane = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 21V4h2v17M4 21h8M8 5h12l-3 3M8 5l-3 3M17 8v5" />
    <rect x="15" y="13" width="4" height="3" />
  </Base>
);
export const IconFlask = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
    <path d="M7.5 15h9" />
  </Base>
);
export const IconBolt = (p: IconProps) => (
  <Base {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </Base>
);
export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);
export const IconSearch = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </Base>
);
export const IconWrench = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8M14.5 6.5 13 5a4 4 0 0 0-5.3 5.3L3 15l3 3 4.7-4.7" />
  </Base>
);
export const IconRocket = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c1-4 5-9 13-9 0 8-5 12-9 13z" />
    <circle cx="15" cy="9" r="1.5" />
  </Base>
);
export const IconLifebuoy = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
  </Base>
);
export const IconUser = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Base>
);
