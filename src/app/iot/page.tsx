import { pageMetadata } from "@/lib/metadata";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { CheckList, CtaBanner, FeatureCard, PageHero, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { IconChip, IconDashboard, IconGateway, IconSensor } from "@/components/icons";

export const metadata = pageMetadata({
  title: "IoT & Edge",
  description:
    "Sensors, gateways, edge devices and dashboards that work together with AI video analytics, so an alert has context: what the camera saw and what the sensors measured.",
  path: "/iot",
});

const building = [
  {
    icon: <IconSensor className="size-5" />,
    title: "Sensors",
    body: "Gas, temperature, humidity, vibration, door and access sensors, chosen for your environment and wired or wireless as the site requires.",
  },
  {
    icon: <IconGateway className="size-5" />,
    title: "Gateways",
    body: "Industrial gateways that bridge Modbus, OPC UA, BLE, LoRaWAN and MQTT, buffering data locally when connectivity drops.",
  },
  {
    icon: <IconChip className="size-5" />,
    title: "Edge devices",
    body: "Compact compute near the cameras for real-time video inference, with remote updates and health monitoring.",
  },
  {
    icon: <IconDashboard className="size-5" />,
    title: "Dashboards",
    body: "One view of video events, sensor readings and alert status by site, zone or asset, with role-based access.",
  },
];

export default function IotPage() {
  return (
    <>
      <PageHero
        eyebrow="IoT & Edge"
        title="When video and sensors work together, alerts come with context."
        intro="A camera sees smoke; a sensor confirms the temperature spike. A camera sees someone enter a zone; an access log shows whether they were authorised. We connect these signals into one view."
      >
        <ButtonLink href="/contact?interest=iot" withArrow>
          Discuss your IoT project
        </ButtonLink>
      </PageHero>

      <Section labelledBy="blocks-heading">
        <SectionHeading id="blocks-heading" eyebrow="Building blocks" title="Hardware and software we design, deploy and integrate." />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {building.map((b) => (
            <li key={b.title}>
              <FeatureCard icon={b.icon} title={b.title}>
                {b.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="arch-heading" className="border-y border-white/5 bg-ink-850/50">
        <SectionHeading
          id="arch-heading"
          eyebrow="Architecture"
          title="How IoT plugs into video analytics."
          intro="Sources on the left, outcomes on the right. Heavy processing stays at the edge, close to where data is created."
        />
        <div className="mt-12">
          <ArchitectureDiagram />
        </div>
      </Section>

      <Section labelledBy="examples-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="examples-heading"
            eyebrow="Combined use cases"
            title="Examples of video + IoT working together."
            intro="These are illustrative patterns we design for. Every deployment is scoped to your site during discovery."
          />
          <div className="glass rounded-3xl p-7 sm:p-9" data-reveal>
            <CheckList
              items={[
                "Smoke seen on camera, cross-checked against nearby temperature or gas readings before escalating",
                "Restricted-zone entry correlated with access-control events",
                "Machine running while a person is detected inside its guarded area",
                "Cold-room door left open, with video evidence of the last person to leave",
                "Remote-site intrusion combined with perimeter and power sensors",
              ]}
            />
          </div>
        </div>
      </Section>

      <CtaBanner title="Have a sensor-heavy site? Let's map it out." />
    </>
  );
}
