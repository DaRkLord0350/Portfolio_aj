import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

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
          justifyContent: "center",
          padding: "80px",
          background: "#050510",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.5), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)",
            display: "flex",
          }}
        />
        <span style={{ fontSize: 26, color: "#a78bfa", letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio
        </span>
        <span style={{ fontSize: 76, fontWeight: 700, color: "#f4f3ff", marginTop: 18 }}>
          {profile.name}
        </span>
        <span style={{ fontSize: 34, color: "#c4b5fd", marginTop: 10 }}>{profile.role}</span>
        <span style={{ fontSize: 24, color: "#a3a1c2", marginTop: 24, maxWidth: 820 }}>
          {profile.tagline}
        </span>
      </div>
    ),
    size,
  );
}
