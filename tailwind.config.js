/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { min: '300px' },
      sm: { min: '640px' },
      md: { min: '800px' },
      lg: { min: '1075px' },
    },
    extend: {},
  },
  plugins: [],
};
