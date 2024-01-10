import nextJest from 'next/jest';

const createJestCofig = nextJest({dir: '.'});

const customJestConfig = {
  verbose: true,
  preset: 'ts-jest',
  transformIgnorePatterns: [],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/*/.(tsx|ts)', '!<rootDir>/*/.test.(tsx|ts)', '!*/.{interface,stub,mock,enum,type}.{js,jsx,ts,tsx}', '!**/{index}.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.(tsx|ts)',
    '!<rootDir>/pages/**/*.test.(tsx|ts)',
  ],
  coverageThreshold: {
      global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
      },
  },
  transform: {
    // '^.+\\.[t|j]sx?$': 'babel-jest',
    // '^.+\\.js$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
      '^.+.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [],
  coverageReporters: ['lcov', 'text-summary'],
  modulePathIgnorePatterns: ['builds', 'node_modules'],
};

module.exports = createJestCofig(customJestConfig);
