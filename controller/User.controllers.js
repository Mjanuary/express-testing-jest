const { Types } = require("mongoose");
const { UserService } = require("../service");
const errorHandler = require("../utils/error");

const getUsers = async (req, res) => {
  const { createdAt } = req.query;

  try {
    let filters = {};

    if(createdAt){
      filters["createdAt"] = {"$gte": new Date(createdAt).setHours(0, 0, 0)};
    }

    let data = await UserService.getUsers(filters);

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, name } = req.body;

    let user = await UserService.getUser({ email });
    if (user.length >= 1) throw new Error("Email already exists");

    let data = await UserService.createUser({
      username,
      email,
      name,
      createdAt: new Date(),
    });

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, name, userId } = req.body;

    let data = await UserService.updateUser({
      username,
      email,
      name,
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

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    let data = await UserService.getUser({ _id: id });

    if (data.length <= 0)
      return res.status(404).send({ message: "Invalid user id" });

    return res.send(data[0]);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
