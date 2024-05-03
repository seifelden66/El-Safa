const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Delivery_address: {
    type: String,
    required: true,
  },
  type_of_payment: {
    type: String,
    enum: ["cache", "online"],
    required: true,
  },
  order_status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "dispatched", "delivered"],
    default: "pending",
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
