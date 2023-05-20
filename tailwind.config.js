/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('./images/desktop.png')",
        'mobile': "url('./images/mobile.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'varRed': "rgb(255,121,120)",
        'varGreen': "rgb(55,204,138)",
        'varBlue': "rgb(93,84,163)",
        'varWhite': "rgb(254,255,255)",
        'varGray':"rgb(91,90,95)"
      }
    },
  },
  plugins: [],
}