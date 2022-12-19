const mongoose = require("mongoose");
const { SchemasTypes, CollectionEnum } = require("../enums");
const { BlogsSchema } = require("../schemas");

module.exports = mongoose.model(
  SchemasTypes.Blog,
  BlogsSchema,
  CollectionEnum.blogs
);
