const express = require("express");
const { check } = require("express-validator");
const {
  createUser,
  AllUsers,
  updateUser,
  deleteUser,
} = require("../controller");

const router = express.Router();

router.get("/", AllUsers);

router.post(
  "/",
  [
    check("username").isString().notEmpty().withMessage("Username is required"),
    check("email").isString().notEmpty().withMessage("Email is required"),
    check("names").isString().notEmpty().withMessage("Names is required"),
  ],
  createUser
);

router.put(
  "/",
  [
    check("userId").isString().notEmpty().withMessage("UserId is is required"),
    check("username").isString().notEmpty().withMessage("Username is required"),
    check("email").isString().notEmpty().withMessage("Email is required"),
    check("names").isString().notEmpty().withMessage("Names is required"),
  ],
  updateUser
);

router.delete(
  "/:userId",
  [check("userId").notEmpty().withMessage("UserId is is required")],
  deleteUser
);

module.exports = router;
