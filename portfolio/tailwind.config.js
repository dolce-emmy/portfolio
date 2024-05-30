const tailwindcss = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        desert: "#E1C8B2",
        persianOrange: "#EE924F",
        fawn: "#F1AF7F",
        caribbean: "#2A6573",
        champagne: "#F9E7DD",
        snow: "#FFF7F5",
        darkPurple: "#27182D",
        cordovan: "#80363F",
        flower: "#FFD700",

        // lightYellow: "#FCE0A2",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgb(0,0,0.4) 2px, #E1C8B2 5px, #E1C8B2 100px)",
        circularDark:
          "repeating-radial-gradient(rgb(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px)
      // xl: { max: "1279px" },
      xl: { max: "1403px" },
      // => @media (max-width: 1279px)
      // lg: { max: "1023px" },
      lg: { max: "1081px" },
      // => @media (max-width: 1023px)
      md: { max: "767px" },
      // => @media (max-width: 767px)
      sm: { max: "639px" },
      // => @media (max-width: 639px)
      xs: { max: "479px" },
      // => @media (max-width: 479px)
    },
  },
  plugins: [require("autoprefixer")],
};
