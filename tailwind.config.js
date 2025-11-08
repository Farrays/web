/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#800020',
        'primary-accent': '#c82260',
        'neutral': '#ffffff',
        'dark-text': '#000000',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-strong': 'pulse-strong 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-bob': 'subtle-bob 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        glow: {
          'from': {
            boxShadow: '0 0 5px #c82260, 0 0 10px #c82260, 0 0 15px #c82260',
            textShadow: '0 0 5px #c82260'
          },
          'to': {
            boxShadow: '0 0 20px #c82260, 0 0 30px #c82260, 0 0 40px #c82260',
            textShadow: '0 0 10px #c82260'
          },
        },
        'pulse-strong': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'subtle-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'accent-glow': '0 0 15px rgba(200, 34, 96, 0.8)',
      }
    },
  },
  plugins: [],
}
