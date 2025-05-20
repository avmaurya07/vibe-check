module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        lofi: "#9cb4cc",
        cosmic: "#6a0dad",
        cottage: "#a7c957",
        chaos: "#ff6b6b",
        deep: "#2c3e50",
      },
      fontFamily: {
        quirky: ["Comic Sans MS", "Comic Sans", "cursive"],
        display: ["Fredoka One", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
