const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("./User.controllers");

const {
  getBlogs,
  createBlogs,
  blogDetails,
  likeDislikeBlog,
  deleteBlog,
  updateBlog,
} = require("./Blog.controllers");

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getBlogs,
  createBlogs,
  blogDetails,
  likeDislikeBlog,
  deleteBlog,
  updateBlog,
  getUserById,
};
