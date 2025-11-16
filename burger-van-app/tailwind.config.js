/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#2C5F7E',
        'golden-yellow': '#D6AB42',
      },
    },
  },
  plugins: [],
}
