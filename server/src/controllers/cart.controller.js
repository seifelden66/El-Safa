const {
  addToCart,
  DeleteFromCart,
  allItemsInCart,
} = require("../models/cart/cart.model");

// add new product in cart or update quantity for product
async function httpAddToCart(req, res) {
  req.body.userId = req.user.id;
  try {
    const items = await addToCart(req.body);
    const allItems = await allItemsInCart(items.userId);
    return res.status(201).json(allItems);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// delete product from cart
async function httpDeleteFromCart(req, res) {
  const item = {
    userId: req.user.id,
    productId: req.query.id,
  };
  try {
    const items = await DeleteFromCart(item);
    const allItems = await allItemsInCart(items.userId);
    return res.status(200).json(allItems);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//  GET user items cart and some of data related the product
async function httpAllItemsInCard(req, res) {
  const id = req.user.id;
  try {
    const items = await allItemsInCart(id);
    return res.status(200).json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { httpAddToCart, httpDeleteFromCart, httpAllItemsInCard };
