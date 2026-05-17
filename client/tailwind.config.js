/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navcolor: "#2B3D61",
        logotext: "#3D94CE",
        orange: "#FF620D",
        background: "#F5F5F5",
        whiteText: "#FFFFFF",
      },
    },
  },

  plugins: [],
}