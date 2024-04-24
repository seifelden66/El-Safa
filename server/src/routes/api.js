const express = require("express");

const usersRouter = require("./users/users.router");
const adminRouter = require("./users/admin.router");
const cartRouter = require("./products/cart.router");
const productRouter = require("./products/products.router");
const categoriesRouter = require("./cetgories/categories.route");
const api = express.Router();

// TODO implement all routes here
api.use("/users", usersRouter);
api.use("/admin", adminRouter);
api.use("/cart", cartRouter);
api.use("/products", productRouter);
api.use("/categories", categoriesRouter);

module.exports = api;
