/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d4e4ff',
          200: '#a7c6ff',
          300: '#7aa9ff',
          400: '#4d8bff',
          500: '#216eff',
          600: '#1557d6',
          700: '#0f41a3',
          800: '#092a70',
          900: '#04133d',
        },
      },
      boxShadow: {
        glow: '0 20px 45px rgba(33, 110, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
