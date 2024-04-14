import type { Config } from "tailwindcss";
import { renderUrlImage } from "./utils/log-helper";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-body": "url('/images/background.png')",
      },
      keyframes: {
        show: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "show-tooltip": "show 5s ease-in-out",
        spining: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
