/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pwpGold: {
          light: '#F5D77F',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
          deep: '#916B15',
        },
        pwpDark: {
          900: '#0A0E17',
          800: '#111726',
          700: '#1A2234',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
