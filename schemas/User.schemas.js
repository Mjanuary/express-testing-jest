const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  createdAt: Date,
});

UsersSchema.index({ email: 1 });

module.exports = UsersSchema;
