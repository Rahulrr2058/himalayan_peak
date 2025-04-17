import type { Config } from "tailwindcss";

export default {
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
        secondary: "#181818",
        babyPink: "#F8EDED",
        descriptionText:"#6C757D",
        footer:"#212121",
      },
      fontFamily: {
        lexend: ['"Lexend"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
} satisfies Config;