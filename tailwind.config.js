/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '2xl': 32,
      'xl': 24,
      'lg': 20,
      'md': 18,
      'sm': 16,
      'xs': 14,
    },
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },                                                                                         
  plugins: [],
}