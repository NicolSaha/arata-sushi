const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./**/*.html', './**/*.js'] },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        rose: colors.rose,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
