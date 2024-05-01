const { NewOrders, allOrders } = require("../models/orders/orders.model");
const { allItemsInCart } = require("../models/cart/cart.model");

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

module.exports = { httpNewOrders, httpAllOrders };
