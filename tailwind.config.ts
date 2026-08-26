import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F2E7",
          soft: "#FBF7EF",
          dark: "#EFE7D4",
        },
        olive: {
          DEFAULT: "#3E4A2B",
          light: "#5B6B3F",
          dark: "#2C351E",
        },
        terracotta: {
          DEFAULT: "#C1603D",
          light: "#D97F5D",
          dark: "#9C4A2E",
        },
        bark: {
          DEFAULT: "#2B2118",
          light: "#4A3B2C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "18px",
        xl: "28px",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(43, 33, 24, 0.12)",
        card: "0 8px 30px -10px rgba(43, 33, 24, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
