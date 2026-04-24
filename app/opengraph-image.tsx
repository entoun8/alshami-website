import { ImageResponse } from "next/og";

export const alt = "Alshami — Authentic Syrian Coffee and Herbs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2C1A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Caramel accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#B8763A",
            display: "flex",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: "100px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: "12px",
            display: "flex",
          }}
        >
          Alshami
        </div>

        {/* Sub-brand label */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: 400,
            color: "#B8763A",
            letterSpacing: "7px",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          COFFEE &amp; HERBS
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "rgba(255,255,255,0.25)",
            marginBottom: "48px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Authentic Syrian flavours, delivered across Australia.
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.30)",
            display: "flex",
          }}
        >
          alshami.com.au
        </div>
      </div>
    ),
    { ...size }
  );
}
