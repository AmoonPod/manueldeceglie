module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      grosso: "400%",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      sans: ["Raleway", "defaultTheme.fontFamily.sans"],
      Montserrat: "'Montserrat', sans-serif;",
      Sora: "'Sora', sans-serif;",
      Azonix: ["AZONIX", "sans-serif"],
    },
    extend: {
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { "background-position": "0%" },
          "50%": { "background-position": "100%" },
        },
      },
    },
  },
  plugins: [],
};
