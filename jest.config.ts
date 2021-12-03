import type { Config } from "@jest/types";
import baseConfig from "./jest.config.base";

const projectPaths = [
    "<rootDir>/libs/components/",
    "<rootDir>/libs/router/",
    "<rootDir>/libs/themes/",
    "<rootDir>/modules/standard/",
    "<rootDir>/templates/web/",
    "<rootDir>/tools/less-theme/",
];

const config: Config.InitialOptions = {
    ...baseConfig,
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: projectPaths.map((projectPath) => `${projectPath}src/**/*.{ts,tsx}`),
    projects: projectPaths.map((projectPath) => `${projectPath}jest.config.ts`),
};

export default config;
