/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e53935', // Rojo principal
          redDark: '#b71c1c',
          redLight: '#ffebee',
          black: '#111111',
          blackSoft: '#222',
          white: '#fff',
          gray: '#f5f5f5',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 