/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center:true,
    },
    fontFamily:{
      'montstarate': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}