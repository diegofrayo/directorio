module.exports = {
  moduleDirectories: ["node_modules", "src", __dirname, "tests"],
  modulePaths: ["<rootDir>/src"],
  roots: ["src", "tests"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
