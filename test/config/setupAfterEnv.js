const mongoose = require("mongoose");

const mongoManager = require("../../mongo/connection");
jest.setTimeout(3000);

beforeAll(async () => {
  mongoManager.connect();
});

afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
});
