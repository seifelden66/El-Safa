const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Connects usersSchema with the "Users" collection
module.exports = mongoose.model("Users", usersSchema);
