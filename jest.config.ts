import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    preset: "ts-jest",
};

export default config;
