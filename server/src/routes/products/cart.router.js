const express = require("express");

const {
  httpAddToCart,
  httpDeleteFromCart,
  httpAllItemsInCard,
} = require("../../controllers/cart.controller");

const {
  passportAuthenticate,
  passportInitialize,
} = require("../../services/auth/isLogin");

const cartRouter = express.Router();

cartRouter.use(passportInitialize);
cartRouter.use(passportAuthenticate);

cartRouter.use((req, res, next) => {
  if (req.user.role != "user") {
    return res
      .status(403)
      .json({ error: "You are not authorized to access this page" });
  }
  next();
});

cartRouter.post("/addToCart", httpAddToCart);
cartRouter.delete("/deleteFromCart", httpDeleteFromCart);
cartRouter.get("/cartItems", httpAllItemsInCard);

module.exports = cartRouter;
