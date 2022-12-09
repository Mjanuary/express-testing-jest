const mongoose = require("mongoose");

const UsersSchema = require("../schemas/User.schemas");

module.exports = mongoose.model("User", UsersSchema, "users");
