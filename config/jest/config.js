const path = require('path');
const rootDir = path.join(__dirname, '../../');

module.exports = {
  verbose: true,
  rootDir,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/config/jest/runner.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
  coverageReporters: ['text-summary', 'lcov', 'json', 'html'],
  transformIgnorePatterns: ['node_modules'],
};
