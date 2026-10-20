import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Light hazelnut accent: the only colour besides black and white
        hazel: {
          50: "#faf6f0",
          100: "#f3eadf",
          200: "#e8d6c0",
          300: "#dcc09f",
          400: "#cda780",
          500: "#b98d63",
          600: "#9d724c",
          700: "#7e5a3d",
          800: "#5f4431",
          900: "#3f2e22",
          950: "#211812",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
