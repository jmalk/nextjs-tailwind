/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "1px 1px 1px rgb(0 0 0 / 0.05)",
      },
      colors: {
        slate: {
          90: "#f2f4f7", // new in-between shade
        },
        teal: {
          600: "#0F8482", // overwrite default
          900: "#00394e", // overwrite default
        },
      },
    },
  },
  plugins: [],
};
