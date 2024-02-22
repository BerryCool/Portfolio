/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainlt' : '#e2e8f0',
        'maindk' : '#0f172am',
      },
    },
  },
  plugins: [],
}

