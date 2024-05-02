const {
  NewOrders,
  allOrders,
  orderDetails,
  confirmOrder,
  dispatchOrder,
  deliverOrder,
} = require("../models/orders/orders.model");
const { allItemsInCart } = require("../models/cart/cart.model");
const { getOneUser } = require("../models/users/users.model");

async function httpNewOrders(req, res) {
  if (req.body.order_status) {
    return res
      .status(403)
      .json({ error: "You are not authorized to send this field" });
  }
  const userId = req.user.id;
  try {
    const cartItem = await allItemsInCart(userId);
    const order = {
      ...req.body,
      userId,
      orderItems: cartItem.items,
      totalPrice: cartItem.totalPrice,
    };
    const userOrders = await NewOrders(order);
    res.status(200).json({ message: "success insert order " });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// get all orders for admin
async function httpAllOrders(req, res) {
  try {
    const orders = await allOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpOrderDetails(req, res) {
  const id = req.query.id;
  try {
    const order = await orderDetails(id);
    const user = await getOneUser(order.userId);
    res.status(200).json({ order, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpConfirmOrder(req, res) {
  try {
    const order = await confirmOrder(req.body.id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpDispatchOrder(req, res) {
  try {
    const order = await dispatchOrder(req.body.id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpDeliverOrder(req, res) {
  try {
    const order = await deliverOrder(req.body.id);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = {
  httpNewOrders,
  httpAllOrders,
  httpOrderDetails,
  httpConfirmOrder,
  httpDispatchOrder,
  httpDeliverOrder,
};
