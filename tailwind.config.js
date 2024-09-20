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
      }
    },
  },
  plugins: [],
}