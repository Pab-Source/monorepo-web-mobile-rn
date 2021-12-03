import type { Config } from "@jest/types";

const ignores = ["/node_modules/"];

const config: Config.InitialOptions = {
    clearMocks: true,
    verbose: true,
    testURL: "http://localhost",
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run.
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    watchPlugins: ["jest-watch-select-projects", "jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    testPathIgnorePatterns: [...ignores],
    coveragePathIgnorePatterns: [...ignores],
    moduleDirectories: ["node_modules", "src"],
};

export default config;
