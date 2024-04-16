const express = require("express");
const { httpGetAllUser } = require("../../controllers/users.controller");
const usersRouter = express.Router();

// TODO impliment this functions
usersRouter.get("/", httpGetAllUser);
// usersRouter.post('/', httpLogin);

module.exports = usersRouter;
