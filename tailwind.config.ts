import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#050505",
        ink: "#F5F5F5",
        "ink-soft": "#A3A3A3",
        surface: "#0F0F0F",
        line: "#1A1A1A",
        signal: "#E50914",
        "signal-dim": "#250507",
        amber: "#D97706",
        "amber-dim": "#251203",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        rail: "1320px",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
        reveal: "reveal 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
