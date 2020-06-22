// tailwind.config.js
const { colors, fontSize, borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'tw-',
  important: false,
  purge: {
    content: ['./src/components/**/*.jsx', './src/pages/**/*.jsx'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      borderRadius: {
        ...borderRadius,
        full: '100%',
      },
      colors: {
        gray: {
          ...colors.gray,
          'pt-100': 'var(--gray-pt-100)',
        },
      },
    },
  },
};
