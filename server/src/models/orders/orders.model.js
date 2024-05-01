const ordersSchema = require("./orders.mongo");
const { cart } = require("../cart/cart.model");

async function NewOrders(order) {
  return await ordersSchema.create(order);
}

async function allOrders() {
  return await ordersSchema.find({}, { orderItems: 0, __v: 0 });
}

module.exports = { NewOrders, allOrders };
