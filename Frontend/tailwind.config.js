/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'yellow': '#ffde01',
        'pink': '#fc48b9',
        'blue': '#5804fa',
        'bg': '#1b252f'
      }
    },
    fontFamily: {
      'RacingSansOne': ['Racing Sans One', 'cursive'],
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

