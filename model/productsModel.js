const mongoose = require("mongoose");

const poductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String },
  gallery: [],
  price: { type: Number, required: true },
  salePrice: Number,
  size: [],
  author: { type: String, default: 'Anonymous' },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", poductSchema);
