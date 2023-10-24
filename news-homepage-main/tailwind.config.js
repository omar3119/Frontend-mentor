/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '720px',
      'tablet1': '800px',


      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily:{
        "inters":["'Inter'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

