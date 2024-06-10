/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        black: "#111111",
        darkGray: "#333333",
        mediumGray: "#5A5A5A",
        lightGray: "#EBECF1",
        primaryBlue: "#690DFF",
      },
      backgroundColor: {
        black: "#000000",
        darkestGray: "#151515",
        white: "#FFFFFF",
        primaryGray: "#9C9DA4",
        lightGray: "#EBECF1",
        primaryBlue: "#690DFF",
        lightBlue: "#deedff",
        pink: "#FF9DDE",
        lightPink: "#F4F5FB",
        purple: "#8B4CFC",
        lightGreen: "#FF1F11",
        yellow: "#F0BF11",
        orange: "#FF5C00",
      },
      borderColor: {
        primary: "#EBECF2",
        primaryBlue: "#690DFF",
      },
      boxShadowColor: {
        primary: "#EBECF2",
        lightPink: "#F4F5FB",
      },
    },
  },
  plugins: [],
};
