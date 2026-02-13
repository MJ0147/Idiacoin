/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'idiacoin-primary': '#0098EA',
        'idiacoin-dark': '#005A8C',
        'idiacoin-light': '#33AFEE',
      },
    },
  },
  plugins: [],
}
