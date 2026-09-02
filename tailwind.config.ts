import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: "#DC2626",
          darkRed: "#991B1B",
          blue: "#2563EB",
          indigo: "#4F46E5",
          emerald: "#059669",
          charcoal: "#0F172A",
          slate: "#334155",
          lightSlate: "#F8FAFC",
          cardBorder: "#E2E8F0",
        },
      },
      fontFamily: {
        headline: ['var(--font-bebas)', '"Bebas Neue"', 'Impact', 'sans-serif'],
        editorial: ['var(--font-syne)', 'Syne', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "soft-sm": "0 2px 8px -2px rgba(15, 23, 42, 0.05)",
        "soft-md": "0 8px 24px -4px rgba(15, 23, 42, 0.08)",
        "soft-xl": "0 20px 40px -8px rgba(15, 23, 42, 0.12)",
      }
    },
  },
  plugins: [],
};
export default config;
