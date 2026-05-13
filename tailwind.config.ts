import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#061A2F",
          deepNavy: "#031225",
          softNavy: "#0B2742",
          green: "#6DA544",
          darkGreen: "#3F7426",
          freshGreen: "#8BC34A",
          orange: "#F25A1D",
          orangeHover: "#D94B13",
          gold: "#D7B35A",
          white: "#FFFFFF",
          offWhite: "#F7F9F5",
          border: "#E4E8DF",
          muted: "#5F6B5F",
          text: "#0B1B2B",
        },
      },
    },
  },
};

export default config;
