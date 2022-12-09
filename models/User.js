const mongoose = require("mongoose");

const UsersSchema = require("../schemas/User");

module.exports = mongoose.model("User", UsersSchema, "users");
