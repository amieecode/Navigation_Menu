/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7811f7",
        brand: "#ffe484",
        gmail: "#ededed",
        fb: "#e6e6e6",
        fbHover: "#cdcdcd",
        fbColor: "#0075fb",
      },
    },
  },
  plugins: [],
}

