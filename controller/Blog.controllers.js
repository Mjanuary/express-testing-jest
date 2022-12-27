const { Types } = require("mongoose");
const { BlogService, UserService } = require("../service");
const errorHandler = require("../utils/error");
const { BlogStatus, SortByEnum } = require("../enums");

const getBlogs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 25,
      sortBy = SortByEnum.ACCEDING,
      withAuthor = false,
      createdBy,
    } = req.query;

    const blogs = await BlogService.getBlogs({
      page: +page,
      limit: +limit,
      sortBy,
      withAuthor: !!withAuthor,
      createdBy: typeof createdBy === "string" ? createdBy : undefined,
    });

    return res.send(blogs);
  } catch (error) {
    errorHandler(res, error);
  }
};

const createBlogs = async (req, res) => {
  try {
    const { cover_url, description, title, createdBy, tags } = req.body;

    let user = await UserService.getUser({
      userId: new Types.ObjectId(createdBy),
    });

    if (user.length <= 0)
      throw new Error("Please provide a valid createdBy value");

    let blog = await BlogService.checkBlogExist(title);
    if (blog.length >= 1)
      throw new Error(
        "This title has been used before, please pick another title"
      );

    let data = await BlogService.createBlog({
      cover_url: cover_url,
      createdAt: new Date(),
      description,
      title,
      createdBy: new Types.ObjectId(createdBy),
      tags: tags || [],
      status: BlogStatus.ACTIVE,
      reactions: {
        dislikes: [],
        likes: [],
      },
    });

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { cover_url, description, title, createdBy, tags, blogId } = req.body;

    let user = await UserService.getUser({
      userId: new Types.ObjectId(createdBy),
    });

    if (user.length <= 0)
      throw new Error("Please provide a valid createdBy value");

    let blog = await BlogService.checkBlogExist(
      title,
      new Types.ObjectId(blogId)
    );

    if (blog.length >= 1)
      throw new Error(
        "This title has been used before, please pick another title"
      );

    let data = await BlogService.updateBlog({
      cover_url,
      description,
      title,
      createdBy: new Types.ObjectId(createdBy),
      tags,
      _id: new Types.ObjectId(blogId),
    });

    return res.send({
      msg:
        data.modifiedCount >= 1
          ? "Post has been updated successfully"
          : "No change made",
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    let data = await BlogService.deleteBlog(new Types.ObjectId(blogId));

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const blogDetails = async (req, res) => {
  try {
    const { blogId } = req.params;
    let data = await BlogService.getBlogDetails(new Types.ObjectId(blogId));

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

const likeDislikeBlog = async (req, res) => {
  try {
    const { blogId, userId, action } = req.body;
    let data = await BlogService.likeDislikeBlog(
      new Types.ObjectId(blogId),
      new Types.ObjectId(userId),
      action
    );

    return res.send(data);
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  getBlogs,
  createBlogs,
  blogDetails,
  likeDislikeBlog,
  deleteBlog,
  updateBlog,
};
