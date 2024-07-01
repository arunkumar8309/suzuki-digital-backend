const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: { type: String, required: true },
  interest: { type: [String], required: true },
  age: { type: Number, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", userSchema, "Users");
