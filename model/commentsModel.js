const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const commentSchema = mongoose.Schema({
  productID: ObjectId,
  userID: ObjectId,
  username: String,
  avatar: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("comments", commentSchema);
