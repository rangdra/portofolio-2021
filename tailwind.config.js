/**
 * Tailwind config aligned to DESIGN.md (MongoDB-style design system).
 * - Brand green CTAs
 * - Deep teal hero bands
 * - Pill buttons (rounded-full), 12px-rounded cards
 * - Euclid Circular A → Inter as the closest open-source proxy
 */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand green
        "brand-green": "#00ed64",
        "brand-green-deep": "#00b545",
        "brand-green-pressed": "#008c34",
        "brand-green-dark": "#00684a",
        "brand-green-mid": "#00a35c",
        "brand-green-soft": "#c3f0d2",

        // Brand teal
        "brand-teal-deep": "#001e2b",
        "brand-teal": "#003d4f",
        "brand-teal-mid": "#00684a",

        // Accents (course/category encoding only)
        "accent-purple": "#7b3ff2",
        "accent-orange": "#fa6e39",
        "accent-pink": "#f06bb8",
        "accent-blue": "#3d4f9f",

        // Surfaces
        canvas: "#ffffff",
        "canvas-dark": "#001e2b",
        surface: "#f9fbfa",
        "surface-soft": "#f4f7f6",
        "surface-feature": "#e3fcef",

        // Hairlines
        hairline: "#e1e5e8",
        "hairline-soft": "#eceff1",
        "hairline-strong": "#c1ccd6",
        "hairline-dark": "#1c2d38",

        // Text
        ink: "#001e2b",
        charcoal: "#1c2d38",
        slate: "#3d4f5b",
        steel: "#5c6c7a",
        stone: "#7c8c9a",
        muted: "#a8b3bc",
        "on-dark": "#ffffff",
        "on-dark-muted": "#a8b3bc",

        // Semantic
        "warning-bg": "#fff8e0",
        "warning-text": "#946f3f",

        // On-primary (text color used on top of brand-green)
        "on-primary": "#001e2b",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"Source Code Pro"',
          '"SF Mono"',
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }]
        "hero-display": [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-1.5px" },
        ],
        "display-lg": ["56px", { lineHeight: "1.15", letterSpacing: "-1px" }],
        "heading-1": ["48px", { lineHeight: "1.2", letterSpacing: "-0.5px" }],
        "heading-2": ["36px", { lineHeight: "1.25", letterSpacing: "-0.5px" }],
        "heading-3": ["28px", { lineHeight: "1.3" }],
        "heading-4": ["22px", { lineHeight: "1.35" }],
        "heading-5": ["18px", { lineHeight: "1.4" }],
        subtitle: ["18px", { lineHeight: "1.5" }],
        "body-md": ["16px", { lineHeight: "1.55" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        caption: ["13px", { lineHeight: "1.4" }],
        micro: ["12px", { lineHeight: "1.4" }],
        "micro-uppercase": [
          "11px",
          { lineHeight: "1.4", letterSpacing: "1px" },
        ],
        "button-md": ["14px", { lineHeight: "1.3" }],
        "code-md": ["14px", { lineHeight: "1.55" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
        xxxl: "40px",
        "section-sm": "48px",
        section: "64px",
        "section-lg": "96px",
        hero: "120px",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        "elev-1": "0 1px 2px 0 rgba(0, 30, 43, 0.04)",
        "elev-2": "0 4px 12px 0 rgba(0, 30, 43, 0.08)",
        "elev-3": "0 12px 24px -4px rgba(0, 30, 43, 0.12)",
        "elev-4": "0 16px 48px -8px rgba(0, 30, 43, 0.16)",
        "glow-green": "0 8px 24px -8px rgba(0, 237, 100, 0.45)",
      },
      transitionDuration: {
        180: "180ms",
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["focus-visible"],
      ringWidth: ["focus-visible"],
      borderColor: ["focus-visible"],
    },
  },
  plugins: [],
};
