/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBlack: "#242933",  // Added the 'primaryBlack' color
        pageWhite: "#F5F5F5",
        textBlue: "#58B1FF",
        textGray: "#808080"
      }
    },
  },
  plugins: [],
}