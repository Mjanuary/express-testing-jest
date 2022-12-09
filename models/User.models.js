const mongoose = require("mongoose");

const { UsersSchema } = require("../schemas");

module.exports = mongoose.model("User", UsersSchema, "users");
