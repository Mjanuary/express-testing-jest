const express = require("express");
const { check } = require("express-validator");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controller");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post(
  "/",
  [
    check("username").isString().notEmpty().withMessage("Username is required"),
    check("email").isString().notEmpty().withMessage("Email is required"),
    check("name").isString().notEmpty().withMessage("name is required"),
  ],
  createUser
);

router.put(
  "/",
  [
    check("userId").isString().notEmpty().withMessage("UserId is is required"),
    check("username").isString().notEmpty().withMessage("Username is required"),
    check("email").isString().notEmpty().withMessage("Email is required"),
    check("name").isString().notEmpty().withMessage("name is required"),
  ],
  updateUser
);

router.delete(
  "/:userId",
  [check("userId").notEmpty().withMessage("UserId is is required")],
  deleteUser
);

module.exports = router;
