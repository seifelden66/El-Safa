const mongoose = require("mongoose");
const { UUID } = require("bson");

const usersSchema = new mongoose.Schema({
  _id: { type: String },
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
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.pre("save", function (next) {
  if (!this._id) {
    this._id = "custom_id_" + new UUID().toHexString();
  }
  next();
});

module.exports = mongoose.model("User", usersSchema);
