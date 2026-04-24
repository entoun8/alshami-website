import { ImageResponse } from "next/og";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "Alshami — Authentic Syrian Coffee and Herbs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await fs.readFile(path.join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

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

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={160}
          height={160}
          alt="Alshami logo"
          style={{
            filter: "brightness(0) invert(1)",
            marginBottom: "24px",
            objectFit: "contain",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "10px",
            display: "flex",
          }}
        >
          Alshami
        </div>

        {/* Sub-brand label */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#B8763A",
            letterSpacing: "7px",
            marginBottom: "36px",
            display: "flex",
          }}
        >
          COFFEE &amp; HERBS
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "2px",
            background: "rgba(255,255,255,0.25)",
            marginBottom: "36px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: "640px",
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
            bottom: "36px",
            right: "72px",
            fontSize: "16px",
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
