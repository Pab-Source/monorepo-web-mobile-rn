import type { Config } from "@jest/types";
import baseConfig from "./jest.config.base";

const projectPaths = ["<rootDir>/src/", "<rootDir>/libs/components/src/", "<rootDir>/modules/standard/src/"];

const config: Config.InitialOptions = {
    ...baseConfig,
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: projectPaths.map((projectPath) => `${projectPath}src/**/*.{ts,tsx}`),
    projects: projectPaths.map((projectPath) => `${projectPath}jest.config.ts`),
};

export default config;
