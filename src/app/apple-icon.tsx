import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch / PWA icon: orange rounded square with white stacked cards.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E55A2B",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 82,
            width: 80,
            height: 50,
            borderRadius: 14,
            background: "rgba(255,255,255,0.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 52,
            width: 84,
            height: 56,
            borderRadius: 16,
            background: "#ffffff",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
