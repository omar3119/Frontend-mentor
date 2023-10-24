/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "very-blue": "hsl(217, 19%, 35%)",
      "dark-blue": "hsl(214, 17%, 51%)",
      "grayish-blue": "hsl(212, 23%, 69%)",
      "light-blue": "hsl(210, 46%, 95%)",
      "white-color": "#ffffff"
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet2': '900px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

