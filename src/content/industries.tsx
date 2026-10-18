import type { ReactNode } from "react";
import { IconBolt, IconBox, IconCrane, IconFactory, IconFlask } from "@/components/icons";

export type Industry = {
  slug: string;
  name: string;
  icon: ReactNode;
  summary: string;
  risks: string[];
  useCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: <IconFactory className="size-6" />,
    summary:
      "Busy shop floors mix people, machines and material movement. Consistent monitoring helps supervisors catch unsafe conditions they can't be everywhere to see.",
    risks: ["Missing PPE at machines and lines", "Entry into guarded or lock-out zones", "Forklifts on shared aisles"],
    useCases: [
      "Zone-specific PPE rules (e.g. helmet plus gloves at presses)",
      "Intrusion alerts for robot cells and hazardous areas",
      "Shift-wise compliance reports for EHS reviews",
    ],
  },
  {
    slug: "warehousing-logistics",
    name: "Warehousing & Logistics",
    icon: <IconBox className="size-6" />,
    summary:
      "Docks, aisles and yards are where people and vehicles meet most often. Proximity analytics help you see near-misses before they become incidents.",
    risks: ["Forklift-pedestrian near-misses", "Unauthorised access to docks and yards", "Blocked emergency exits"],
    useCases: [
      "Forklift-pedestrian proximity alerts with configurable distances",
      "Dock and yard intrusion monitoring after hours",
      "Near-miss trend reports by zone and shift",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: <IconCrane className="size-6" />,
    summary:
      "Sites change week to week. Edge deployment and portable camera setups bring analytics to places with limited connectivity.",
    risks: ["Missing helmets, vests and harnesses", "Entry under suspended loads or near excavations", "Fire risk from hot work"],
    useCases: [
      "PPE checks at gates and active work zones",
      "Exclusion zones around cranes and heavy equipment",
      "Edge inference where bandwidth is limited",
    ],
  },
  {
    slug: "chemicals-pharma",
    name: "Chemicals & Pharma",
    icon: <IconFlask className="size-6" />,
    summary:
      "Process safety and controlled areas demand strict, documented compliance. Video analytics adds an always-on layer of evidence.",
    risks: ["Unauthorised entry to controlled areas", "Smoke or flame in storage and process areas", "PPE gaps in hazardous zones"],
    useCases: [
      "Area-specific PPE rules for hazardous zones",
      "Early visual smoke and flame alerts alongside your existing detectors",
      "Audit trails that support internal and regulatory reviews",
    ],
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    icon: <IconBolt className="size-6" />,
    summary:
      "Substations, plants and remote assets are spread out and often unmanned. Edge processing and IoT integration extend visibility across sites.",
    risks: ["Intrusion at remote or unmanned sites", "Unsafe approach to live equipment", "Fire and smoke at switchyards and storage"],
    useCases: [
      "Perimeter and restricted-zone intrusion at remote sites",
      "Combining video with IoT sensor readings for context",
      "Centralised dashboards across distributed assets",
    ],
  },
];
