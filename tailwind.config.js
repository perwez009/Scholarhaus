/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6fa",
          100: "#d9ebf4",
          500: "#1f5d7d",
          600: "#16455d",
        },
      },
      boxShadow: {
        soft: "0 14px 35px rgba(21, 44, 58, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
