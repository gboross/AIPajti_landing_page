/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FFC600',
          light: '#FFD700',
        },
        secondary: {
          DEFAULT: '#0B1437',
          light: '#1B2555',
        },
        background: {
          dark: '#070B24',
          DEFAULT: '#0B1437',
          light: '#1B2555',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}