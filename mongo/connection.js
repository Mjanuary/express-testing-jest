const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const MONGO_URL = process.env.MONGO_URL;

class MongoManager {
  constructor() {
    if (!MONGO_URL) throw new Error("No connection found");
    this.mongoUrl = MONGO_URL;
  }

  getMongoUrl() {
    return this.mongoUrl;
  }

  connect() {
    try {
      console.log(`Connecting to ${this.getMongoUrl()} database`);
      return mongoose.connect(this.getMongoUrl(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      throw new Error("Failed to connect");
    }
  }

  disconnect() {
    return this.disconnect();
  }
}

const mongoManager = new MongoManager();

module.exports = mongoManager;
