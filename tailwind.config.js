/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  safelist: [
    "bg-red-300", "border-red-400", "text-red-700",
    "bg-green-300", "border-green-400", "text-green-700",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px"
    },

    extend: {
      
    },
    fontFamily: {
      primary: ["Jost", "serif"]
    }
  },
  plugins: [],
}