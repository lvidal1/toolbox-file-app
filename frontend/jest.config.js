module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/jest.setup.js',
    '<rootDir>/__testUtils__/setupTests.js'
  ],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': '<rootDir>/__testUtils__/mock/styleMock.js',
    '^~/(.*)$': '<rootDir>/$1'
  }
};

// process.env = Object.assign(process.env, {
//   API_URL: 'http://mockapi.com/',
// });
