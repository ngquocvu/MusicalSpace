const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
