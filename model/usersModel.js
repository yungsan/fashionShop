const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '/images/products/default_Thumbnail.jpg' },
  joined: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', usersSchema);