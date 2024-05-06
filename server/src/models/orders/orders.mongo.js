const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  Delivery_address: {
    type: String,
    required: false,
  },
  type_of_payment: {
    type: String,
    enum: ["cache", "online"],
    required: true,
  },
  order_status: {
    type: String,
    required: true,
    enum: ["pending", "canceled", "confirmed", "dispatched", "delivered"],
    default: "pending",
  },
  order_state: {
    type: Boolean,
    default: true,
  },
  orderItems: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
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

module.exports = mongoose.model("Order", ordersSchema);
