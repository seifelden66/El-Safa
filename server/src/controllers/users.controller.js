const { getAllUser } = require("../models/users/users.model");

async function httpGetAllUser(req, res) {
  const users = await getAllUser();
  res.status(200).json(users);
}

module.exports = { httpGetAllUser };
