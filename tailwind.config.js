module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('../src/assets/top-fold-waves.png')",
      },
      colors: { 
        lightOrange: "#ffb200",
        newBlack: "#0B0F13",
        footer: "#1B1815"
      },
      fontFamily: {
        sans: ['Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
