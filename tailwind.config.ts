import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#162142",
          deepNavy: "#162142",
          softNavy: "#162142",
          green: "#3D7123",
          darkGreen: "#3D7123",
          freshGreen: "#3D7123",
          orange: "#F25B1E",
          orangeHover: "#F25B1E",
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
