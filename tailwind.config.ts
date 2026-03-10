import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        ascone: {
          primary: "#1C3F3A",
          "light-grey": "#E0EAE8",
          cream: "#EBE8D8",
          navy: "#0A0C29",
        },
      },
    },
  },
  plugins: [],
};

export default config;
