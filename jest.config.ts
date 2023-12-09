import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@datatypes/(.*)$": "<rootDir>/src/types/$1",
  },
};

export default jestConfig;
