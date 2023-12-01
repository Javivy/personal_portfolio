/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      titleColor: '#444',
      primaryText: '#3b6b67',
      primary: '#A6D8D4',
      secondary: '#8EAF9D',
      backgroundPrimary: '#D7DAE5',
      backgroundSecondary: '#6B7D7D',
      primaryDark: '#F05941',
      secondaryDark: '#BE3144',
      backgroundPrimaryDark: '#22092C',
      backgroundSecondaryDark: '#872341'
    },

    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}