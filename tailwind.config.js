/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          // Your custom blues, for example:
          50: '#ebf2ff',
          100: '#d7e6ff',
          200: '#adcfff',
          300: '#84b7ff',
          400: '#5aa0ff',
          500: '#3089ff',
          600: '#0062e0',
          700: '#0049aa',
          800: '#00307a',
          900: '#00174a',
        },
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          400: '#94A3B8',
        }
      },
    },
  },
  plugins: [],
}
