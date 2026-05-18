/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        card: "#111827",
        accent: "#3B82F6",
        text: "#E5E7EB",
      },
    },
  },
  plugins: [],
}
