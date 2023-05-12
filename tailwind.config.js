/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'layout': '1140px',
      },
      fontSize: {
        'heading': '3.3rem',
      },
      colors: {
        'heading': '#0B132A'
      }
    },
  },
  plugins: [],
}