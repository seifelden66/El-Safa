// auth/jwt.js
const jwt = require("jsonwebtoken");

function generateAndSetToken(id, role) {
  return jwt.sign({ id, role }, "kareem", { expiresIn: "3h" });
}

function generateEmailToken(email) {
  return jwt.sign({ email }, "kareem", { expiresIn: "2m" });
}

function generateResetToken(email, id) {
  return jwt.sign({ id, email }, "kareem", { expiresIn: "2m" });
}
module.exports = {
  generateAndSetToken,
  generateEmailToken,
  generateResetToken,
};
