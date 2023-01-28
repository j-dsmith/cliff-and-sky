/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "burger-down": "burgerDown 300ms ease-in-out forwards",
        "burger-up": "burgerUp 300ms ease-in-out forwards",
        "burger-down-reverse": "burgerDown 300ms ease-in-out reverse forwards",
        "burger-up-reverse": "burgerUp 300ms ease-in-out reverse forwards",
      },
      keyframes: {
        burgerDown: {
          "0%": { transform: "rotate(0deg) translateY(0)" },
          "100%": { transform: "rotate(25deg) translateY(-2px)" },
        },
        burgerUp: {
          "0%": { transform: "rotate(0deg) translateY(0)" },
          "100%": { transform: "rotate(-25deg) translateY(2px)" },
        },
      },
      fontFamily: { walsheim: ['"GTWalsheim"', "sans-serif"] },
    },
    plugins: [],
  },
};
