/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fourlayout: " repeat(4, 6rem)",
      },
      gridTemplateRows: {
        sixlayout: "minmax(7rem, auto) repeat(5, 6rem)",
      },
    },
  },
  plugins: [],
};
