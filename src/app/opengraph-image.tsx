import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 70% 40%, #0f2a3d 0%, #060b16 55%, #03060d 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, letterSpacing: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 999, background: "#22d3ee", boxShadow: "0 0 40px #22d3ee" }} />
          <span>{siteConfig.name.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Vision that keeps your people safe.
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#a9b7cb" }}>
            {`AI video analytics for industrial safety and compliance · ${siteConfig.tagline}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
