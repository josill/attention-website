import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [
  //   "./**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    screens: {
      sm: "768px",
      md: "1440px",
    },
    fontFamily: {
      spotnik: ["Spotnik", "sans-serif"],
      beVietnam: ["Be Vietnam", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "react-gradient": "linear-gradient(180deg, #FFF 0%, #EAEAEA 100%)",
        "django-gradient": "linear-gradient(180deg, #11724B 0%, #000100 100%)",
        "csharp-gradient": "linear-gradient(180deg, #240F43 0%, #110523 100%)",
        "swift-gradient": "linear-gradient(180deg, #FC9F3D 0%, #FE4B2B 100%)",
      },
      colors: {
        bgWhite: "#FCFDFF",
        headerWhite: "#F5F5F5",
        paragraphGray: "#999",
        customGray: "#474747",
        headerGray: "#3F3F3F",
        lineGray: "#C1CCDC",
        gridLight: "#DFDFDF",
        gridDark: "#535353",
        lightGray: "#A4B3C9",
        lightGray2: "#CFD8E6",
        lightGray3: "#C1C1C1",
        cardGray: "#EEEDEC",
        textGray: "#818181",
        textGray2: "#707070",
        textGray3: "#999",
        textGray4: "#848484",
        textGray5: "#32302E",
        textGray6: "A1ABB2",
        textGray7: "#303030",
        textGray8: "#656C77",
        textGray9: "#9B9B9B",
        darkGray: "#C0C0C0",
        darkGray2: "#7C8297",
        darkGray3: "#4E4E4E",
        customBlack: "#1A1A1A",
        customBlack2: "#181818",
        customBlack3: "#484848",
        customBlack4: "#181E27",
        gray: "#3184FF",
        darkBlue: "#2A518C",
        darkBlue2: "#274D86",
        darkBlue3: "#0D2140",
        darkBlue4: "#274574",
        darkBlue5: "#203D69",
        lightBlue: "#3184FF",
        lightBlue2: "#9CAFCD",
        textBlue: "#A0B3D0",
        orange: "#FC8D39",
        red: "#AE3318",
        darkRed: "#854132",
        purple: "#240F43",
        yellow: "#F0DB4F",
        darkBrown: "#7E7168",
        darkBrow2: "#74573A",
      },
      boxShadow: {
        smallDark: "3px 3px 6px #888888",
        smallLight: "5px 5px 10px #888888",
        glow: "0px -0.111px 1.909px 0px rgba(78, 78, 78, 0.07), 0px -0.266px 4.589px 0px rgba(78, 78, 78, 0.09), 0px -0.501px 8.64px 0px rgba(78, 78, 78, 0.10), 0px -0.893px 15.412px 0px rgba(78, 78, 78, 0.12), 0px -1.671px 28.827px 0px rgba(78, 78, 78, 0.14), 0px -4px 69px 0px rgba(78, 78, 78, 0.20)",
        glowWeak:
          "0px -0.111px 1.909px 0px rgba(78, 78, 78, 0.07), 0px -0.266px 4.589px 0px rgba(78, 78, 78, 0.09), 0px -0.501px 8.64px 0px rgba(78, 78, 78, 0.10), 0px -0.893px 15.412px 0px rgba(78, 78, 78, 0.12), 0px -1.671px 28.827px 0px rgba(78, 78, 78, 0.14), 0px -4px 69px 0px rgba(78, 78, 78, 0.20)",
        buttonShadow: "3px 1px 10px 0px #DCDCDC",
      },
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
