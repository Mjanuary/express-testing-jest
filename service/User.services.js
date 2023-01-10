const { UsersModel } = require("../models");

class UserService {
  static getUsers = async (filters) => {
    try {
      return await UsersModel.find(filters);
    } catch (e) {
      throw e;
    }
  };

  static getUser = async (data) => {
    const { userId, email } = data;
    try {
      return await UsersModel.find({
        $or: [{ email: email }, { userId: userId }],
      });
    } catch (e) {
      throw e;
    }
  };

  static createUser = async (data) => {
    try {
      return await UsersModel.create(data);
    } catch (e) {
      throw e;
    }
  };

  static updateUser = async (data) => {
    try {
      const { email, name, username, _id } = data;
      return await UsersModel.updateOne(
        { _id },
        {
          $set: {
            name,
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

  // static getUser = async (id) => {
  //   try {
  //     return await UsersModel.find({ _id: id });
  //   } catch (e) {
  //     throw e;
  //   }
  // };
}

module.exports = UserService;
