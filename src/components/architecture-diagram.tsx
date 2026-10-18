/** Simple, static SVG architecture diagram for the IoT page. */

type Node = { x: number; y: number; w: number; h: number; title: string; sub: string; accent?: boolean };

const nodes: Node[] = [
  { x: 20, y: 40, w: 200, h: 76, title: "IP cameras", sub: "RTSP / ONVIF" },
  { x: 20, y: 152, w: 200, h: 76, title: "IoT sensors", sub: "Gas · temp · vibration · access" },
  { x: 20, y: 264, w: 200, h: 76, title: "PLCs & machines", sub: "Modbus · OPC UA · MQTT" },
  { x: 300, y: 96, w: 220, h: 88, title: "Edge AI device", sub: "Video inference on-site", accent: true },
  { x: 300, y: 216, w: 220, h: 88, title: "IoT gateway", sub: "Protocol bridge · buffering" },
  { x: 600, y: 140, w: 220, h: 104, title: "Event & rules engine", sub: "Correlates video + sensor data", accent: true },
  { x: 900, y: 40, w: 200, h: 76, title: "Dashboards", sub: "Live view · trends" },
  { x: 900, y: 152, w: 200, h: 76, title: "Alerts", sub: "Assign · ack · escalate" },
  { x: 900, y: 264, w: 200, h: 76, title: "Integrations", sub: "VMS · ERP/MES · ticketing" },
];

const links: [number, number, number, number][] = [
  // [x1, y1, x2, y2]
  [220, 78, 300, 130],
  [220, 190, 300, 250],
  [220, 302, 300, 270],
  [520, 140, 600, 180],
  [520, 260, 600, 210],
  [820, 180, 900, 78],
  [820, 192, 900, 190],
  [820, 204, 900, 302],
];

export function ArchitectureDiagram() {
  return (
    <figure className="glass overflow-x-auto rounded-3xl p-4 sm:p-8" data-reveal>
      <svg
        viewBox="0 0 1120 380"
        className="h-auto w-full min-w-[720px]"
        role="img"
        aria-labelledby="arch-title arch-desc"
      >
        <title id="arch-title">Picabord IoT and video analytics architecture</title>
        <desc id="arch-desc">
          IP cameras feed an on-site edge AI device. IoT sensors and PLCs feed an IoT gateway. Both send events to an event and
          rules engine that correlates video and sensor data, which then drives dashboards, alerts and integrations.
        </desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#22d3ee" />
          </marker>
        </defs>

        <g fontFamily="inherit" fontSize="12" fill="#8b9ab1">
          <text x="120" y="22" textAnchor="middle" letterSpacing="2">ON SITE · SOURCES</text>
          <text x="410" y="22" textAnchor="middle" letterSpacing="2">EDGE</text>
          <text x="710" y="22" textAnchor="middle" letterSpacing="2">PLATFORM</text>
          <text x="1000" y="22" textAnchor="middle" letterSpacing="2">OUTCOMES</text>
        </g>

        <g stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)">
          {links.map(([x1, y1, x2, y2], i) => {
            const mx = (x1 + x2) / 2;
            return <path key={i} className="hero-circuit" d={`M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`} />;
          })}
        </g>

        {nodes.map((n) => (
          <g key={n.title}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="14"
              fill={n.accent ? "#0c2533" : "#0e172a"}
              stroke={n.accent ? "#22d3ee" : "#24314d"}
              strokeWidth="1.5"
            />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 - 4} textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="600">
              {n.title}
            </text>
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 18} textAnchor="middle" fill="#a9b7cb" fontSize="12">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-4 text-sm text-mist-400">
        Raw video is processed at the edge. Only events, metadata and evidence snapshots move upstream. Scroll sideways on
        small screens to see the full diagram.
      </figcaption>
    </figure>
  );
}
