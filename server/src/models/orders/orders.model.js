const ordersSchema = require("./orders.mongo");
const payOnlineSchema = require("./payOnline.mongo");
const { cart } = require("../cart/cart.model");

async function NewOrders(order) {
  return await ordersSchema.create(order);
}

async function allOrders() {
  return await ordersSchema.find({}, { orderItems: 0, __v: 0 });
}

async function userOrders(id) {
  return await ordersSchema.find({ userId: id }, { orderItems: 0, __v: 0 });
}

async function pendingOrders() {
  return await ordersSchema.find(
    { order_status: "pending" },
    { orderItems: 0, __v: 0 }
  );
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

async function PayOnline(data) {
  return await payOnlineSchema.create(data);
}

module.exports = {
  NewOrders,
  allOrders,
  orderDetails,
  confirmOrder,
  dispatchOrder,
  deliverOrder,
  userOrders,
  PayOnline,
  pendingOrders,
};
