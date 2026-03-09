/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f1b3d",
        section: "#111a38",
        card: "#2b315d",
        cardAlt: "#3f4675",
        secondary: "#14b8a6",
        accent: "#f3b27a",
        textMain: "#f8f7f4",
        textSoft: "#b8bdd3",
        border: "#4a5284",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};