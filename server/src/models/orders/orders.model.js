const ordersSchema = require("./orders.mongo");
const { cart } = require("../cart/cart.model");

async function NewOrders(order) {
  return await ordersSchema.create(order);
}

async function allOrders() {
  return await ordersSchema.find({}, { orderItems: 0, __v: 0 });
}

async function orderDetails(id) {
  return await ordersSchema.findById(id);
}

async function confirmOrder(id) {
  return await ordersSchema.findOneAndUpdate(
    { _id: id },
    { $set: { order_status: "confirmed" } },
    { new: true }
  );
}

async function dispatchOrder(id) {
  return await ordersSchema.findOneAndUpdate(
    { _id: id },
    { $set: { order_status: "dispatched" } },
    { new: true }
  );
}

async function deliverOrder(id) {
  return await ordersSchema.findOneAndUpdate(
    { _id: id },
    { $set: { order_status: "delivered" } },
    { new: true }
  );
}

module.exports = {
  NewOrders,
  allOrders,
  orderDetails,
  confirmOrder,
  dispatchOrder,
  deliverOrder,
};
