/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

const screens = {
  xxs: "320px",
  xs: "444px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

const colors = {
  transparent: "transparent",
  primary: {
    1: "#857DB1",
    2: "#9E99CE",
    3: "#BBB2E9",
  },
  secondary: {
    1: "#FFBC99",
    2: "#CABDFF",
    3: "#8FDDFF",
  },
  neutral: {
    DEFAULT: "#111315",
    100: "#1A1D1F",
    200: "#777E90",
    300: "#33383F",
    400: "6F767E",
    500: "#EFEFEF",
    600: "#757185",
    700: "#FCFCFC",
  },
  grey: {
    600: "#2E3A59",
    500: "#8F9BB3",
    400: "#6F767E",
    300: "#E4E9F2",
    200: "#E8ECEF",
    100: "#F7F9FC",
  },
};

const gradient = {
  "gradient-primary": "linear-gradient(to right, #9099FC, #D87CEE)",
  "gradient-second": "linear-gradient(to right, #7684FF, #FF98E2)",
  "gradient-third": "linear-gradient(to right, #E19FE4, #9884A3)",
};

const typography = plugin(({ addComponents }) => {
  const components = {
    /* eventure headline */
    ".eventure-headline-1": {
      fontWeight: 600,
      fontSize: "64px",
      lineHeight: "77px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    ".eventure-headline-2": {
      fontWeight: 600,
      fontSize: "60px",
      lineHeight: "72px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    ".eventure-headline-3": {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "72px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    ".eventure-headline-4": {
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "48px",
      fontFamily: "Poppins",
      letterSpacing: "-0.01em",
    },
    ".eventure-headline-5": {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    ".eventure-headline-6": {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "40px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    ".eventure-headline-7": {
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "32px",
      fontFamily: "Poppins",
      letterSpacing: "-0.02em",
    },
    /* eventure label */
    ".eventure-label-1": {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Poppins",
    },
    ".eventure-label-2": {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "Poppins",
    },
    ".eventure-label-3": {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
    ".eventure-label-4": {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "18px",
      fontFamily: "Poppins",
    },
    ".eventure-label-5": {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Poppins",
    },
    /* eventure body */
    ".eventure-body": {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      fontFamily: "Poppins",
    },
    ".eventure-body-1": {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
    ".eventure-body-2": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Poppins",
    },
    ".eventure-body-3": {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "32px",
      fontFamily: "Poppins",
    },
    ".eventure-body-4": {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "30px",
      fontFamily: "Poppins",
    },

    /* eventure caption */
    ".eventure-caption-1-semibold": {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "20px",
      fontFamily: "Poppins",
    },
    ".eventure-caption-1": {
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
    ".eventure-caption-1-sora": {
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "24px",
      fontFamily: "Sora",
    },
    ".eventure-caption-2": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Poppins",
    },
    ".eventure-caption-2-sora": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Sora",
    },
    ".eventure-caption-3": {
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px",
      fontFamily: "Poppins",
    },

    ".eventure-button-1-bold": {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
    ".eventure-button-1-semibold": {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
  };
  addComponents(components, {
    variants: ["responsive"],
  });
});

const theme = {
  screens,
  colors,
  backgroundImage: gradient,
  typography,
  fontFamily: {
    sans: ["Poppins", "Sora", ...fontFamily.sans],
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme,
  plugins: [typography],
  corePlugins: {
    container: false,
  },
};
