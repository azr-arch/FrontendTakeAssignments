/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(240,57%,97%)",
        secondary: "#D8D8F0",
        darkBlue: "#373ae0",
      },
      textColor: {
        primary: "#183030", //black shade
        secondary: "#373ae0", //dark blue
      },
      borderColor: {
        darkBlue: "#373ae0",
      },
    },
  },
  plugins: [],
};
