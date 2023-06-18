/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "white" : "#ffffff",
      "black": "#423f61",
      "purple": {
        1: "#40128B",
        2: "#dfd1ff"
      },
      "green": "#16a34a",
      "pink":{
        1: "#ACBCFF",
        2: "#E6FFFD"
      }
    },
  },
  plugins: [],
}
