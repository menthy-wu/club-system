/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        theme1: "#28304E",
        theme2: "#FF8541",
        gray: "#616161",
      },
    },
  },
  plugins: [],
};
