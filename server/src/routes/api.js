const express = require("express");

const usersRouter = require("./users/users.router");
const api = express.Router();

// TODO implement all routes here
api.use("/users", usersRouter);
// api.use("./products", productRouter);

module.exports = api;
