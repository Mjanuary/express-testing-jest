const express = require("express");
const { Types } = require("mongoose");
const { UserService } = require("../service");
const errorHandler = require("../utils/error");

const AllUsers = async (req, res) => {
  try {
    let data = await UserService.getUsers();

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, names } = req.body;
    let data = await UserService.createUser({
      username,
      email,
      names,
      createdAt: new Date(),
    });

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, names, userId } = req.body;

    let data = await UserService.updateUser({
      username,
      email,
      names,
      _id: new Types.ObjectId(userId),
    });

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    let data = await UserService.deleteUser(new Types.ObjectId(userId));
    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  AllUsers,
  createUser,
  updateUser,
  deleteUser,
};
