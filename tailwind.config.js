/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        elkana: {
          ink: '#071832',
          pine: '#123B6D',
          leaf: '#C9A227',
          gold: '#D4AF37',
          sky: '#2F6DAE',
          mist: '#FFF4D8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        heading: ['Work Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(7, 24, 50, 0.14)',
      },
    },
  },
  plugins: [],
}
