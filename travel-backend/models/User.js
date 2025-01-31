const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["traveler", "guide"], required: true },
  availability: { type: Boolean, default: true } // Only for guides
});

module.exports = mongoose.model("User", UserSchema);
