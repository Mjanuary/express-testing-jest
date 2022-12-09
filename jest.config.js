module.exports = {
  testEnvironment: "node",
  setupFiles: ["dotenv/config", "<rootDir>/test/config/setEnvVars.js"],
  setupFilesAfterEnv: ["<rootDir>/test/config/setupAfterEnv.js"],
};
