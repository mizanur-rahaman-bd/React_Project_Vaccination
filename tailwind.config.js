/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brand_color': '#17C2EC',
      },
    },

    container: {
      center:true,
    },
    fontFamily:{
      'montstarate': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}