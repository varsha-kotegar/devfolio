import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.name} — Analyst Portfolio`;
export const size = { width: 1200, height: 630 };
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
          background: "#F6F5F1",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#1B6B93" }} />
          <div style={{ fontSize: 22, color: "#1B6B93", letterSpacing: 2 }}>
            FIELD NOTES — ANALYST PORTFOLIO
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#14213D", lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 30, color: "#3B4258", maxWidth: 900 }}>{profile.role}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
