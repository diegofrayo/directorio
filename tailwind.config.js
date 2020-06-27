const { borderRadius, leading, width } = require('tailwindcss/defaultTheme');

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
      leading: {
        ...leading,
        '0': '0',
      },
      width: {
        ...width,
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
    },
  },
};
