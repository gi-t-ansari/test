/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/src/assets/bg-img.png')",
        img2: "url('/src/assets/bg-img2.jpg')",
      },
      colors: {
        "wooden-secondary": "#E1A27B",
        "wooden-primary": "#CD8957",
        primary: "#7EA873",
      },
      textShadow: {
        white: "2px 2px 4px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-white": {
          textShadow: "2px 2px 4px rgba(255, 255, 255, 1)",
        },
      });
    },
  ],
};
