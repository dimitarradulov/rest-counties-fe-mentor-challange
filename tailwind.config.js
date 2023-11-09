/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-mode-blue": "hsl(209, 23%, 22%)",
        "dark-mode-darker-blue": "hsl(207, 26%, 17%)",
        "light-mode-darker-blue": "hsl(200, 15%, 8%)",
        "light-mode-gray": "hsl(0, 0%, 52%)",
        "light-mode-off-white": "hsl(0, 0%, 98%)",
      },
    },
    fontFamily: {
      sans: ["Nunito", "system-ui"],
    },
  },
  plugins: [],
};
