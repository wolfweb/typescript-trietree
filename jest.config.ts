
export default {
  preset: "ts-jest",
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules']
};
