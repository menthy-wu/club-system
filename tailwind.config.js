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
      backgroundImage: {
        topography: "url('../assets/topography.svg')",
        formalInvitation: "url('../assets/formal-invitation.svg')",
        jupiter: "url('../assets/jupiter.svg')",
      },
      colors: {
        theme1: "#28304E",
        theme2: "#DE783F",
        gray: "#616161",
      },
    },
  },
  plugins: [],
};
