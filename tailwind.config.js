/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/homescreen/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      backgroundImage: {},
      colors: {
        theme1: "#28304E",
        theme2: "#DE783F",
        gray: "#616161",
      },
    },
  },
  plugins: [],
};
