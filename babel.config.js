module.exports = {
  presets: [
    [
      "next/babel",
      {
        "styled-jsx": {
          plugins: ["styled-jsx-plugin-postcss"],
        },
        "@babel/preset-env": {
          targets: { node: "current" },
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};
