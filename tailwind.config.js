/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#506B84', // Versión pastel del azul original
          light: '#7A91A7',
          dark: '#2F3E4B',
        },
        secondary: {
          DEFAULT: '#F2AE30', // Nuevo color dorado
          light: '#FFB08C',
          dark: '#FD5200',
        },
        accent: {
          blue: '#A8C0D6', // Azul pastel complementario
          orange: '#FFD0B5', // Naranja pastel complementario
          gray: '#E5E9ED', // Gris pastel para fondos
          gold: '#F2AE30', // También lo añadimos como acento
        },
        dark: '#2D3748',
        light: '#F7FAFC',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 