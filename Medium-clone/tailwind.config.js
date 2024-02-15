/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondari:'#f9f9f9',
        button:'#1a8917',
        text:'#242424',
        backgroundColor:'#ffffff'
      }
    },
  },
  plugins: [],
}