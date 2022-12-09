const express = require("express");
const UserRouter = require("./usersRouter");

router = express.Router();

router.use("/users", UserRouter);

module.exports = router;
