// generate hahing password

const bcrypt = require("bcrypt");
const saltRound = 5;
async function generateHashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw err;
  }
}

module.exports = generateHashPassword;
