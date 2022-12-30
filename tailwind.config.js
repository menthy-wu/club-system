/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins"],
    },
    extend: {
      colors: {
        theme1: "#181D31",
        theme2: "#FF8541",
      },
    },
  },
  plugins: [],
};
