const { borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'tw-',
  important: false,
  purge: {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
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
    },
  },
};
