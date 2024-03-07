/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f8fa',
          '100': '#dceef1',
          '200': '#bddde4',
          '300': '#90c5d0',
          '400': '#64a8b9',
          '500': '#40879a',
          '600': '#386f82',
          '700': '#325b6c',
          '800': '#304d5a',
          '900': '#2c424d',
          '950': '#192a33',
        },
      },
    },
   
    
  },
  plugins: [],
}