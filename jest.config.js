module.exports = {
  moduleDirectories: ["node_modules", "src", __dirname, "tests"],
  modulePaths: ["<rootDir>/src"],
  roots: ["src", "test"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
