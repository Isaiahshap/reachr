const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9ddff',
          300: '#7cc2ff',
          400: '#3aa0ff',
          500: '#0072e5',
          600: '#0057b3',
          700: '#004085',
          800: '#002F60',
          900: '#001F40',
        },
        secondary: colors.purple,
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
