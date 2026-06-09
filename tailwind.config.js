/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0D0D0D",
        coal: "#1A1A1A",
        gold: "#FFC107",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.28)",
        soft: "0 16px 40px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
