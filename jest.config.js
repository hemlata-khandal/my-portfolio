module.exports = {
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["<rootDir>/jest-config/setupTests.ts"],
    testMatch: [
        "**/__specs__/**/*.+(ts|tsx|js|jsx)",
        "**/?(*.)+(spec|test).+(ts|tsx|js|jsx)",
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/jest-config/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg|jpg|jpeg|png|ico|webp)$":
            "<rootDir>/jest-config/__mocks__/fileMock.js",
    },
    transformIgnorePatterns: ["node_modules", "dist"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    reporters: [
        "default",
        [
            "jest-junit",
            {
                outputDirectory: "./coverage/junit",
                outputName: "junit.xml",
            },
        ],
        [
            "jest-html-reporters",
            {
                publicPath: "./coverage/html-report",
                filename: "report.html",
            },
        ],
    ],
    collectCoverageFrom: [
        "src/**/*.{js,ts,jsx,tsx}",
        "!src/**/index.{ts,tsx}",
        "!src/reportWebVitals.ts",
        "!src/react-app-env.d.ts",
        "!src/service-worker.ts",
        "!src/serviceWorkerRegistration.ts",
        "!src/firebase-util.ts"
    ],
    coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};
