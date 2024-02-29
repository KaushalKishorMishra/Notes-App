import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "cs-primary": "#142d4c",
      "cs-secondary": "#f0f0f0",
      "cs-action": "#77d9c2",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), typography],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cyberpunk",
      "coffee",
      "synthwave",
      "retro",
      "black",
      "luxury",
      "dracula",
    ],
  },
};
export default config;
