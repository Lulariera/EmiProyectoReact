module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Square Peg': ['cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
