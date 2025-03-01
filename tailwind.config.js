/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0A0723",
        primary: "#2F6A62",
        "primary-dark": "#265249",
        white: "#FFFFFF",
        gray: {
          light: "#EAECEE",
          lighter: "#F8FAF9",
        },
        red: "#EF372B",
        pink: "#FFE3E1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
