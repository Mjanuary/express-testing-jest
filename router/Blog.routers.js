const express = require("express");
const { check } = require("express-validator");
const { SortByEnum } = require("../enums");
const {
  getBlogs,
  createBlogs,
  blogDetails,
  deleteBlog,
  updateBlog,
  likeDislikeBlog,
} = require("../controller");

const router = express.Router();

router.get(
  "/",
  [
    check("page")
      .optional()
      .isInt({ min: 1 })
      .toInt()
      .default(1)
      .withMessage("value must be an integer greater than 0"),
    check("limit")
      .optional()
      .isInt({ min: 1, max: 100 })
      .toInt()
      .default(10)
      .withMessage("value must be an integer between 1 and 100"),
    check("withAuthor").optional().isBoolean().toBoolean(),
    check("userId").optional().isMongoId(),
    check("sortBy").optional().isIn(Object.values(SortByEnum)),
  ],
  getBlogs
);

router.post(
  "/",
  [
    check("title").isString().withMessage("a title is required"),
    check("description").isString().withMessage("Description is required"),
    check("cover_url").isString().withMessage("image cover is required"),
    check("createdBy").isString().withMessage("createdBy is required"),
    check("tags").isArray().withMessage("tags must be array of strings"),
  ],
  createBlogs
);

router.put(
  "/",
  [
    check("blogId").isString().withMessage("blogId required"),
    check("title").isString().withMessage("a title is required"),
    check("description").isString().withMessage("Description is required"),
    check("cover_url").isString().withMessage("image cover is required"),
    check("createdBy").isString().withMessage("createdBy is required"),
    check("tags").isArray().withMessage("tags must be array of strings"),
  ],
  updateBlog
);

router.put(
  "/reaction",
  [
    check("blogId").isString().withMessage("blogId required"),
    check("userId").isString().withMessage("a title is required"),
    check("action").isString().withMessage("status is required"),
  ],
  likeDislikeBlog
);

router.delete(
  "/:blogId",
  [check("blogId").isString().withMessage("blogId required")],
  deleteBlog
);

router.get(
  "/:blogId",
  [check("blogId").isString().withMessage("blogId required")],
  blogDetails
);

module.exports = router;
