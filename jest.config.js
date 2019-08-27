module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  testMatch: ["<rootDir>/test/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};
