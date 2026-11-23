import { ImageResponse } from "next/og";

export const alt = "Open Source Engineers — Research toward AGI";
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
          padding: "54px 64px",
          background: "#10120d",
          color: "#f3f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 17,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(243,240,232,0.58)",
          }}
        >
          <span>OSE / Research + Curriculum</span>
          <span style={{ color: "#c9f65b" }}>Cohort 03 · 2027</span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 54 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 190,
              height: 190,
              borderRadius: 999,
              border: "1px solid rgba(243,240,232,0.28)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 999,
                background: "#2140ff",
                boxShadow: "0 0 80px rgba(33,64,255,0.7)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#c9f65b",
                top: 18,
                right: 38,
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 86,
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
                maxWidth: 800,
              }}
            >
              <span>Research toward AGI,</span>
              <span>from neurons to</span>
              <span style={{ color: "#c9f65b", fontStyle: "italic" }}>
                first principles.
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 22,
            borderTop: "1px solid rgba(243,240,232,0.18)",
            fontSize: 18,
            letterSpacing: "0.06em",
            color: "rgba(243,240,232,0.56)",
          }}
        >
          <span>Open Source Engineers</span>
          <span>opensourceengineers.com</span>
        </div>
      </div>
    ),
    size,
  );
}
