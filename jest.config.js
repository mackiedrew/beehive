module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js",
  coverageDirectory: "./.coverage/",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/mobile-config.js",
    "!**/jest.config.js",
    "!**/jestSetup.test.js",
    "!**/client/main.js",
    "!**/server/main.js"
  ],
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  setupFiles: ["./jestSetup.test.js"],
  moduleFileExtensions: ["js", "jsx"],
  modulePaths: [
    "<rootDir>/node_modules/",
    "<rootDir>/node_modules/jest-meteor-stubs/lib/"
  ],
  moduleNameMapper: {
    "^(.*):(.*)$": "$1_$2",
    "meteor/(.*)": "<rootDir>/.mocks/meteor/$1.js"
  },
  unmockedModulePathPatterns: ["/^imports\\/.*\\.jsx?$/", "/^node_modules/"]
};
