const {
  AllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("./Users.controllers");

const {
  AllBlogs,
  createBlogs,
  blogDetails,
  likeDislikeBlog,
  deleteBlog,
  updateBlog,
} = require("./Blog.controllers");

module.exports = {
  AllUsers,
  createUser,
  updateUser,
  deleteUser,
  AllBlogs,
  createBlogs,
  blogDetails,
  likeDislikeBlog,
  deleteBlog,
  updateBlog,
};
