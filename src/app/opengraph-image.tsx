import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Product Engineer`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1115",
          color: "#f2eee5",
          padding: "72px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ color: "#86c7b6", fontSize: 24, letterSpacing: 6 }}>
          PRODUCT ENGINEER
        </div>
        <div>
          <div style={{ fontSize: 96, letterSpacing: -5, lineHeight: 0.95 }}>
            Mohammed Bilal
          </div>
          <div style={{ marginTop: 28, maxWidth: 780, color: "#b8b4ad", fontSize: 34 }}>
            Reliable web systems, payment workflows, and AI-assisted product experiences.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#86c7b6", fontSize: 22 }}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Payments</span>
        </div>
      </div>
    ),
    size
  );
}
