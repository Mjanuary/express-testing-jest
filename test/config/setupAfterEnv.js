const mongoose = require("mongoose");

const mongoManager = require("../../mongo/connection");

beforeAll(async () => {
  mongoManager.connect();
});

afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
});
