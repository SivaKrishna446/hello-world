/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    collectCoverage: true,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
    // The directory where Jest should output its coverage files
    coverageDirectory: './reports/coverage-app',
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'clover',
    ],
    verbose: true,
    testPathIgnorePatterns: ['./node_modules/', 'mock.ts', 'dist'],
  };