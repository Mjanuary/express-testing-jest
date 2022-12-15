const express = require("express");
const UserRouter = require("./Users.routers");

router = express.Router();

router.use("/users", UserRouter);

module.exports = router;
