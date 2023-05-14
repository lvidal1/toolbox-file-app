module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': '<rootDir>/__testUtils__/mock/styleMock.js',
    '^~/(.*)$': '<rootDir>/$1'
  }
};
