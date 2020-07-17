const {
  borderRadius,
  leading,
  width,
  height,
  minHeight,
  flexGrow,
} = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "tw-",
  important: false,
  purge: {
    content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      borderRadius: {
        ...borderRadius,
        full: "100%",
      },
      leading: {
        ...leading,
        "0": "0",
      },
      width: {
        ...width,
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
      },
      height: {
        ...height,
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
      },
      minHeight: {
        ...minHeight,
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
      },
      flexGrow: {
        ...flexGrow,
        "1": "1",
        "2": "2",
        "3": "3",
      },
    },
  },
};
