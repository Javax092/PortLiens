import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(59,130,246,0.28), transparent 28%), linear-gradient(180deg, #050814 0%, #030611 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.34), rgba(34,211,238,0.14) 18%, rgba(3,7,18,0.92) 70%)",
            boxShadow: "0 0 80px rgba(34,211,238,0.12)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(103,232,249,0.18)",
            borderRadius: "30px",
            padding: "38px",
            background: "rgba(5, 10, 24, 0.62)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: 24,
                letterSpacing: "0.3em",
                color: "rgba(165,243,252,0.88)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "64px",
                  height: "64px",
                  borderRadius: "20px",
                  border: "1px solid rgba(103,232,249,0.2)",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(34,211,238,0.08)",
                }}
              >
                {siteConfig.shortBrand}
              </div>
              <span>{siteConfig.brand}</span>
            </div>

            <div
              style={{
                display: "flex",
                borderRadius: "999px",
                border: "1px solid rgba(110,231,183,0.22)",
                padding: "12px 18px",
                fontSize: 20,
                color: "rgba(209,250,229,0.92)",
              }}
            >
              {siteConfig.availability}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
            <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.28em", color: "rgba(165,243,252,0.76)" }}>
              ENGENHARIA DE SISTEMAS • IA • AUTOMACAO
            </div>
            <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.02 }}>
              {siteConfig.name}
            </div>
            <div style={{ display: "flex", fontSize: 32, lineHeight: 1.3, color: "rgba(226,232,240,0.92)" }}>
              Produtos digitais, sistemas web e automacoes com leitura profissional e visual sci-fi.
            </div>
          </div>

          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            {["Projetos com impacto", "Stack clara", "CTA para recrutador e cliente"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRadius: "999px",
                  border: "1px solid rgba(103,232,249,0.16)",
                  padding: "12px 18px",
                  fontSize: 20,
                  color: "rgba(224,242,254,0.92)",
                  background: "rgba(15,23,42,0.46)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
