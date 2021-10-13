// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./dist/*.html",
    "./src/*.js",
    "./src/**/*.js",
    "./src/*.html",
    "./src/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build palette
        rose: colors.rose,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
