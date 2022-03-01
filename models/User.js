'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true, unique: true},
    password: {type: String, required: true},
    imageAvatar: {type: String, default: 'https://i.pravatar.cc/500'},
    isAdmin: {type: Boolean, default: false, required: true}
  },
  {
    timestamps: true
  }
);

//Create model
const User = mongoose.model('User', userSchema);

//Exports model
module.exports = User;
