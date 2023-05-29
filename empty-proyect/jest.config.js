// https://jestjs.io/docs/configuration

module.exports = {
  //rootDir: "./App/tests"
  coveragePathIgnorePatterns: [
    "node_modules",
    "app/componentUI"
  ],
  projects: [
    {
      displayName: "client",
      testMatch: ["<rootDir>/client/**/*.spec.js"],
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ['<rootDir>/jest.env.js'],
    },
    {
      displayName: "server",
      testMatch: ["<rootDir>/server/**/*.spec.js"],
      testEnvironment: "node",
    },
    {
      displayName: "root",
      testMatch: ['<rootDir>/*.spec.js'],
      testEnvironment: "node",
    },
  ],
};
