/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sfprotext: ['SFProText', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height'
      },
      boxShadow: {
        header: '0px 0px 8px 0px rgb(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#EE0033",
          "primary-focus": "#EE0033",
        },
      },
    ],
  },
}
