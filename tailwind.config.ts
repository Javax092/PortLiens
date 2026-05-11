import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        panel: "#0a1024",
        glow: "#38bdf8",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.2), 0 20px 60px rgba(8,145,178,0.18)",
      },
      backgroundImage: {
        "grid-futuristic":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
