/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      titleColor: "#444",
      primaryText: "#3b6b67",
      primaryTextDark: "#EBD3F8",
      primary: "#A6D8D4",
      secondary: "#8EAF9D",
      backgroundPrimary: "#D7DAE5",
      backgroundSecondary: "#6B7D7D",
      primaryDark: "#7A1CAC",
      secondaryDark: "#AD49E1",
      backgroundPrimaryDark: "#2E073F",
      backgroundSecondaryDark: "#7A1CAC",
    },

    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
