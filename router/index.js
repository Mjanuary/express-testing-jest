const express = require("express");
const UserRouter = require("./User.routers");
const BlogRouter = require("./Blog.routers");

router = express.Router();

router.use("/users", UserRouter);
router.use("/blogs", BlogRouter);

module.exports = router;
