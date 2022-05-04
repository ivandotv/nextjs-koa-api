/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('../../jest.config.cjs')

module.exports = {
  ...baseConfig,
  rootDir: '.',
  projects: undefined,
  testMatch: ['<rootDir>/src/__tests__/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/__tests__/**',
    '!<rootDir>/src/__fixtures__/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}
