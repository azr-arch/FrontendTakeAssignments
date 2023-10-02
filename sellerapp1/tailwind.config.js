/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(207, 18.6%, 76.9%, 50%)",
        secondary: "hsl(220, 33.3%, 94.7%)",
        "btn-primary": "#4b98ecff",
      },
      colors: {
        primary: "hsl(208, 14.5%, 25.7%)",
        "btn-bg": "#4b98ecff",
      },
      borderColor: {
        "poweder-blue": "#a0c2e1ff",
      },
    },
  },
  plugins: [],
};
