const usersSchema = require("./users.mongo");

async function getAllUser() {
  const users = await usersSchema.find();
  return users;
}

module.exports = { getAllUser };
