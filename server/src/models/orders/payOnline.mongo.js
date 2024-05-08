const mongoose = require("mongoose");
const payOnlineSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  amount_cents: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  integration_id: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  peinding: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
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

module.exports = mongoose.model("PayOnline", payOnlineSchema);
