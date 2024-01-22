import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      spotnik: ['Spotnik', 'sans-serif'],
      beVietnam: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgWhite: "#FCFDFF",
        paragraphGray: "#999",
        customGray: "#474747",
        lineGray: "#C1CCDC",
        lightGray: "#A4B3C9",
        darkGray: "#C0C0C0",
        customBlack: "#1A1A1A",
        gray: "#3184FF",
        darkBlue: "#2A518C",
        darkBlue2: "#274D86",
        darkBlue3: "#0D2140",
        lightBlue: "#3184FF",
        lightBlue2: "#9CAFCD",
        orange: "#FC8D39",
      }
    },
  },
  plugins: [
    nextui({
      primary: {
        DEFAULT: "#000000",
        foreground: "#000000",
      },
      secondary: {
        DEFAULT: "#FFFFFF",
        foreground: "#FFFFFF",
      },
    }),
  ],
};
export default config;
