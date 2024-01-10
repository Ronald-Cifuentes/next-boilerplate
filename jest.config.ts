import nextJest from 'next/jest';

const createJestCofig = nextJest({dir: '.'});

const IgnorePatterns = [
  '/node_modules/',
  '<rootDir>/templates/',
  '<rootDir>/.next'
];

const customJestConfig = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  transformIgnorePatterns: IgnorePatterns,
  testPathIgnorePatterns: IgnorePatterns,
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/pages/index.*',
    '!<rootDir>/src/**/index.*',
    '!<rootDir>/templates/**/*'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  moduleNameMapper: {
    '^.+.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  modulePathIgnorePatterns: ['builds', 'node_modules']
};

module.exports = createJestCofig(customJestConfig);
