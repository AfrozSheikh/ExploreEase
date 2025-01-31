// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ["traveler", "guide"], required: true },
//   availability: { type: Boolean, default: true } // Only for guides
// });

// module.exports = mongoose.model("User", UserSchema);


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['traveler', 'guide'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: function () {
      return this.role === 'guide';
    },
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
