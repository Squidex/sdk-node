/** @type {import('jest').Config} */
const config = {
    globalSetup: "./tests/globalSetup.ts",
    globalTeardown: "./tests/globalTeardown.ts",
    testTimeout: 5000,
};

module.exports = config;
