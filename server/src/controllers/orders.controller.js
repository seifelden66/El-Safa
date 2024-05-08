const {
  NewOrders,
  allOrders,
  orderDetails,
  confirmOrder,
  dispatchOrder,
  deliverOrder,
  PayOnline,
  userOrders,
} = require("../models/orders/orders.model");
const { allItemsInCart } = require("../models/cart/cart.model");
const { getOneUser } = require("../models/users/users.model");
const sendEmail = require("../services/sendEmail");

async function httpNewOrders(req, res) {
  if (req.body.order_status) {
    return res
      .status(403)
      .json({ error: "You are not authorized to send this field" });
  }
  const userId = req.user.id;
  try {
    const cartItem = await allItemsInCart(userId);
    const { Delivery_address, type_of_payment } = req.body;
    const order = {
      Delivery_address,
      type_of_payment,
      userId,
      orderItems: cartItem.items,
      totalPrice: cartItem.totalPrice,
    };
    const userOrders = await NewOrders(order);
    await sendEmail({
      to: req.body.email,
      subject: "Your Order Confirmation - ElSafa",
      html: `<h1>Your Order Confirmation - ElSafa</h1>
      <p>Dear <strong>${req.body.name}</strong>,</p>
      <p>We are pleased to inform you that we have received your order.</p>
      <p>Here are the details of your order:</p>
      <ul>
        <li><strong>Order ID:</strong> ${userOrders._id}</li>
        <li><strong>Items:</strong>
            <ul>
                ${cartItem.items
                  .map(
                    (item) => `
                    <li>
                        ${item.name} - Quantity: ${item.quantity} - Price: ${item.price} EGP
                    </li>
                `
                  )
                  .join("")}
            </ul>
        </li>
        <li><strong>Total Amount:</strong> ${order.totalPrice} EGP</li>
    </ul>
      <p>Your order is now being processed and will be dispatched soon.</p>
      <p>Thank you for shopping with ElSafa!</p>
      <p>Best regards,<br/>The ElSafa Team</p>`,
    });

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

async function httpUserOrders(req, res) {
  try {
    const id = req.user.id;
    const orders = await userOrders(id);
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
    res.status(200).json({
      message: "The order has been confirmed",
      orderStatus: order.order_status,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpDispatchOrder(req, res) {
  try {
    const order = await dispatchOrder(req.body.id);
    res.status(200).json({
      message: "The order is in the delivery stage",
      orderStatus: order.order_status,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpDeliverOrder(req, res) {
  try {
    const order = await deliverOrder(req.body.id);
    res
      .status(200)
      .json({ message: "order is deliverd", orderStatus: order.order_status });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpOlinePayment(req, res) {
  try {
    const data = {
      id: req.body.obj.id,
      amount_cents: req.body.obj.amount_cents,
      currency: req.body.obj.currency,
      integration_id: req.body.obj.integration_id,
      order_id: req.body.obj.order.id,
      peinding: req.body.obj.pending,
      success: req.body.obj.success,
    };
    const payOnline = await PayOnline(data);
    res.status(201).json({ success: "success insert order data to database" });
  } catch (error) {
    console.log(error);
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
  httpUserOrders,
  httpOlinePayment,
};
