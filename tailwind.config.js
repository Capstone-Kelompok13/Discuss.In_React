/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "40px",
        center: true,
      },
      colors: {
        primary: '#707070'
      }
    },
  },
  plugins: [],
}