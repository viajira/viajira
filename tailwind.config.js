/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"'],
        gabarito: ["Gabarito", "sans - serif"],
      },
    },
    extend: {},
  },
  plugins: [],
};
