import type { Config } from "tailwindcss";

/** Todd Spencer — tokens use RGB channels from `app/globals.css`. */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-deep": "rgb(var(--color-paper-deep) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft": "rgb(var(--color-primary-soft) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        teal: "rgb(var(--color-teal) / <alpha-value>)",
        copper: "rgb(var(--color-copper) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "80rem",
        measure: "62ch",
        "measure-wide": "44rem",
      },
      boxShadow: {
        lift: "0 1px 0 rgba(24, 33, 53, 0.05), 0 28px 60px -28px rgba(24, 33, 53, 0.20)",
        "lift-hover": "0 1px 0 rgba(24, 33, 53, 0.06), 0 38px 70px -28px rgba(24, 33, 53, 0.26)",
        surface: "0 1px 0 rgba(24, 33, 53, 0.05), 0 22px 52px -24px rgba(24, 33, 53, 0.16)",
        "surface-hover": "0 1px 0 rgba(24, 33, 53, 0.06), 0 30px 58px -22px rgba(24, 33, 53, 0.18)",
        "inset-frame": "inset 0 0 0 1px rgba(24, 33, 53, 0.07)",
        glow: "0 0 0 1px rgba(39, 73, 122, 0.10), 0 30px 80px -30px rgba(39, 73, 122, 0.32)",
        "soft-warm": "0 1px 0 rgba(201, 146, 75, 0.05), 0 24px 56px -20px rgba(201, 146, 75, 0.20)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        cinema: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        editorial: "720ms",
        cinema: "900ms",
      },
      spacing: {
        "section-y-sm": "4.5rem",
        "section-y": "6.5rem",
        "section-y-md": "8.5rem",
        "section-y-lg": "11rem",
      },
    },
  },
  plugins: [],
};

export default config;
