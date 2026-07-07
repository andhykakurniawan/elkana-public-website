/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        elkana: {
          ink: '#071832',
          pine: '#0E315C',
          leaf: '#9A7A24',
          gold: '#B8922D',
          sky: '#285C91',
          mist: '#F4EBD8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        heading: ['Work Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(7, 24, 50, 0.12)',
        glow: '0 22px 70px rgba(184, 146, 45, 0.14)',
      },
    },
  },
  plugins: [],
}
