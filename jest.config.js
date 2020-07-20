module.exports = {
  moduleDirectories: ["node_modules", "src", __dirname, "test"],
  modulePaths: ["<rootDir>/src"],
  roots: ["src", "test"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
