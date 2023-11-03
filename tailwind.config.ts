import type { Config } from "tailwindcss";
import { COLORS } from "./app/src/constants/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      13: "104px",
      14: "112px",
      15: "120px",
    },
    colors: COLORS,
    screens: {
      small: "320px",
      phone: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1200px",
      large: "1201",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        small: "4px",
        regular: "8px",
        medium: "16px",
        big: "32px",
      },
      height: {
        1: "1px",
        button: "56px",
        input: "56px",
        header: "70px",
      },
      zIndex: {
        header: "9999",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
