/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0801A1A', 
        subMain: '#F20000',
        dry: '#0B0F29',
        text: 'C0C0C0',
        border: '#4b5563'
      }
    },
  },
  plugins: [],
}