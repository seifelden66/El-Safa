// auth/jwt.js
const jwt = require("jsonwebtoken");

function generateAndSetToken(id, role) {
  return jwt.sign({ id, role }, "kareem", { expiresIn: "3h" });
}

module.exports = generateAndSetToken;
