module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/types.ts',
    '!<rootDir>/src/**.d.ts',
    '!<rootDir>/src/__tests__/**',
    '!<rootDir>/src/__fixtures__/**'
  ],
}
