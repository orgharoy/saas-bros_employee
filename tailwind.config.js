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
      "red": "#FF0000",
      "white" : "#ffffff",
      "black": "#423f61",
      "purple": {   
        1: "#712be4",
        2: "#7f40e6",
        3: "#8d55e9",
        4: "#9b6aec",
        5: "#a97fee",
        6: "#b895f1",
        7: "#c6aaf4",
        8: "#d4bff6",
        9: "#e2d4f9",
      },
      "green": "#16a34a",
      "orange":{
        1:"#f3731b",
        2:"#f48234",
        3:"#f6914c",
        4:"#f7a064",
        5:"#f8af7c",
        6:"#fabe94",
        7:"#fbcdad"
      }
    },
  },
  plugins: [],
}
