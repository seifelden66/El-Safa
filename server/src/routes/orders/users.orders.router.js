const express = require("express");
const {
  passportAuthenticate,
  passportInitialize,
} = require("../../services/auth/isLogin");

const {
  httpNewOrders,
  httpUserOrders,
} = require("../../controllers/orders.controller");

// NOTE - all route here for user oreders like (add new order)
const userOrderRouter = express.Router();
userOrderRouter.use(passportInitialize);
userOrderRouter.use(passportAuthenticate);

userOrderRouter.use((req, res, next) => {
  if (req.user.role != "user") {
    return res
      .status(403)
      .json({ error: "You are not authorized to access this page" });
  }
  next();
});

userOrderRouter.post("/newOrder", httpNewOrders);
userOrderRouter.get("/orders", httpUserOrders);

module.exports = userOrderRouter;
