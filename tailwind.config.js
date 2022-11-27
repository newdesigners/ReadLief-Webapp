/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "appRed": "#BE2F2A",
        "appGrey": "#F4F4F2",
        "appBlue": "#4C8DD7",
        "appDarkGrey": "#E3E3E3",
        "appLightText": "#AEAEAE"
      }
    },
  },
  plugins: [],
}
