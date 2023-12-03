/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E37C4',
        secondary: "#F1D64B",
        textColor: '#FFFFFF',
        bgRed: '#B81D28',
        textColorRed: '#B81D28',
        textOrange: '#DD5E35',
        bgWaiting: '#efd9bd',
      },
    },
  },
  plugins: [],
}

