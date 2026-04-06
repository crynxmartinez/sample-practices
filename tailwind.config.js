/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#F5F1ED',
          200: '#EDE7E0',
        },
        coral: {
          100: '#F5DDD4',
          200: '#E8B4A0',
          300: '#D89580',
        },
        sage: {
          100: '#C5D4CD',
          200: '#9AACA3',
          300: '#7A9189',
        },
      },
    },
  },
  plugins: [],
}
