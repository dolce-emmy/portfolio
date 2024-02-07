/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        // lightYellow: "#FCE0A2",
      },
    },
  },
  plugins: [],
};
