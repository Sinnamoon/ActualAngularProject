/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "firebrick": "#B52E31",
        "test-red" : "#E10112",
        "test-red-2" : "#C3000A",
        "test-black" : "#1D1D1D",
        "alabaster": "#EFEEE7",
        "richblack": "#001514",
        "silver": "#CDCCCD",
        "slategray": "#6C6F7F",
        "senary": "#FFA500",
        "septenary": "#FF1493",
        "octonary": "#FF8C00",
      }
    },
  },
  plugins: [],
}