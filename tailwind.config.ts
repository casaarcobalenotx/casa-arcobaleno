import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ef",
        chalk: "#fffdf8",
        linen: "#ede3d5",
        sage: "#8f9d86",
        terracotta: "#b96f56",
        taupe: "#8b7d70",
        espresso: "#2f2923",
        charcoal: "#3b3935",
        gold: "#b89a62"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(47, 41, 35, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
