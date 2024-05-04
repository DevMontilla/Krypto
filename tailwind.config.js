/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit'],
        roboto: ['Roboto'],
        poppins: ['Poppins']
      },
      colors: {
        background: '#020748'
      }
    },
  },
  plugins: [],
};
