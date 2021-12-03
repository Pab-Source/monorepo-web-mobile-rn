import type { Config } from "@jest/types";
import baseConfig from "../../../jest.config.base";

const config: Config.InitialOptions = {
    ...baseConfig,
    roots: ["src"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
    name: "components-lib",
    displayName: "components-lib",
};

export default config;
