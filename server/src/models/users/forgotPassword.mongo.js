const mongoose = require("mongoose");

const resetCodeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  expiration: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("ResetCode", resetCodeSchema);
