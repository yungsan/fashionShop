const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const cartSchema = mongoose.Schema({
  userID: ObjectId,
  productID: ObjectId,
  amount: { type: Number, default: 1 },
  size: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("carts", cartSchema);
