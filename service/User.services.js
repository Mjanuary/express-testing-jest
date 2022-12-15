const { UsersModel } = require("../models");

class UserService {
  static getUsers = async () => {
    try {
      return await UsersModel.find();
    } catch (e) {
      throw e;
    }
  };

  static createUser = async (user) => {
    try {
      let checkEmail = await UsersModel.find({ email: user.email });
      if (checkEmail.length >= 1) throw new Error("Email already exists");

      return await UsersModel.create(user);
    } catch (e) {
      throw e;
    }
  };

  static updateUser = async (user) => {
    try {
      const { email, names, username, _id } = user;
      return await UsersModel.updateOne(
        { _id },
        {
          $set: {
            names,
            email,
            username,
          },
        }
      );
    } catch (e) {
      throw e;
    }
  };

  static deleteUser = async (userId) => {
    try {
      return await UsersModel.deleteOne({ _id: userId });
    } catch (e) {
      throw e;
    }
  };
}

module.exports = UserService;
