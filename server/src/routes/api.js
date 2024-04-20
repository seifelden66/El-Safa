const express = require("express");

const usersRouter = require("./users/users.router");
const adminRouter = require("./users/admin.router");
const api = express.Router();

// TODO implement all routes here
api.use("/users", usersRouter);
api.use("/admin", adminRouter);
// api.use("./products", productRouter);

module.exports = api;
