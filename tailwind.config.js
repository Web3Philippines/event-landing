/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura"],
        satoshi: ["Satoshi"],
      },
      backgroundImage: {
        draper: "url('../public/draper.png')",
      },
      colors: {
        "purple-heart": "#7b3fe4",
        "blue-ribbon": "#016eea",
        "black-pearl": "#080524",
      },
    },
  },
  plugins: [],
};
