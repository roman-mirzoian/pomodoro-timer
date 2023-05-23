/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        focusBg: "rgba(255, 76, 76, 0.15)",
        focusItem: "#471515",
        shortBreakBg: "rgba(77, 218, 110, 0.15)",
        shortBreakItem: "#14401D",
        longBreakBg: "rgba(76, 172, 255, 0.15)",
        longBreakItem: "#153047",
      },
    },
  },
  plugins: [],
};
