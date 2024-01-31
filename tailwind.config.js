module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_4c": "#0000004c",
          "900_7e": "#0000007e",
          "900_6c": "#0000006c",
          "900_0f": "#0000000f",
          "900_33": "#00000033",
          "900_63": "#00000063",
        },
        red: { 500: "#ff3737", 600: "#e33233" },
        gray: { 100: "#f4f4f4", 900: "#251c15" },
        light_blue: { 500: "#0aaaf4" },
        teal: { A400: "#1ad698" },
        indigo: { A700: "#4339f2" },
        yellow: { 700: "#f8bd1c" },
        deep_purple: { A400: "#891be8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
