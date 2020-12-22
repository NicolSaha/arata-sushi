const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
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
