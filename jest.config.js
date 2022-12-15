module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  modulePaths: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '/src/(.*)': '<rootDir>/src/$1'
  }
}
