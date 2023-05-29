// https://jestjs.io/docs/configuration

module.exports = {
  coveragePathIgnorePatterns: [
    "node_modules",
  ],
  projects: [
    {
      displayName: "components",
      testMatch: ["<rootDir>tests/components/**/*.spec.js"],
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ['<rootDir>/jest.env.js'],
    },
    {
      displayName: "utils",
      testMatch: ["<rootDir>tests/utils/**/*.spec.js"],
      testEnvironment: "node",
    }
  ],
};
