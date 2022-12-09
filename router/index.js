const express = require("express");
const UserRouter = require("./Users.router");

router = express.Router();

router.use("/users", UserRouter);

module.exports = router;
