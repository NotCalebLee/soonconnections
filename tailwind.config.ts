import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "horizontal-shake": {
          "0%, 50%, 100%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(-5px)",
          },
          "75%": {
            transform: "translateX(5px)",
          },
        },
        "solve-pop": {
        "0%": { transform: "scale(0.9)", opacity: "0" },
        "60%": { transform: "scale(1.05)", opacity: "1" },
        "100%": { transform: "scale(1)" },
      },
      },
      animation: {
        "horizontal-shake": "horizontal-shake 0.2s ease-in-out infinite",
        "solve-pop": "solve-pop 0.4s ease-in-out",

      },
    },
  },
  plugins: [],
};
export default config;
