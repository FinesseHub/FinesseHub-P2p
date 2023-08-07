/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // maroon: '#990000',
        // lightGrey: '#c0c0c0',
        coolBrown: '#964F17'
      }
    },
  },
  plugins: [],
}

