const usersSchema = require("./users.mongo");
const productSchema = require("../products/product.model");
const orderSchema = require("../orders/orders.mongo");
// const
const resetCodeSchema = require("./forgotPassword.mongo");
const generateHashPassword = require("../../services/auth/bcryptPassword");

async function getAllUser() {
  const users = await usersSchema.find({}, { password: 0, __v: 0 });
  return users;
}
async function getOneUser(id) {
  const users = await usersSchema.findById(id, { password: 0, __v: 0 });
  return users;
}
// ANCHOR - add user
async function addNewUser(user) {
  const hashedPassword = await generateHashPassword(user.password);
  const newUser = Object.assign(user, {
    password: hashedPassword,
    role: "user",
  });
  return await addUser(newUser);
}
// ANCHOR - add admin
async function addNewAdmin(user) {
  const hashedPassword = await generateHashPassword(user.password);
  const newUser = Object.assign(user, {
    password: hashedPassword,
    role: "admin",
  });
  return await addUser(newUser);
}

async function addUser(user) {
  return await usersSchema.create(user);
}

async function editUserProfile(user, id) {
  if (user.password) {
    const hashedPassword = await generateHashPassword(user.password);
    user.password = hashedPassword;
  }
  return usersSchema.findOneAndUpdate(
    { _id: id },
    { $set: user },
    { new: true }
  );
}

// ANCHOR - login
async function userLogin(user) {
  const res = await usersSchema.findOne(
    { email: user.email },
    { email: 1, password: 1, _id: 1, role: 1 }
  );
  return res;
}

// ANCHOR - user profile
async function userProfile(user) {
  return await usersSchema.findOne(
    { _id: user.id, role: user.role },
    { password: 0, createdAt: 0, updatedAt: 0, __v: 0 }
  );
}

// ANCHOR - check Email
async function checkEmail(email) {
  return await usersSchema.findOne({ email: email }).select("email");
}
// ANCHOR - save reset password code in database
// NOTE - THIS FUNCTION USE resetCodeSchema
async function saveResetCode(data) {
  return await resetCodeSchema.create(data);
}

// ANCHOR - check about code
async function cheackCode(code, email) {
  return await resetCodeSchema.findOne({ code: code, email: email });
}

// ANCHOR - update password set new password
async function resetPassword(email, password) {
  const hashedPassword = await generateHashPassword(password);
  return await usersSchema.findOneAndUpdate(
    { email: email },
    { password: hashedPassword },
    { new: true }
  );
}

// SECTION - GOOGLE OAUTH (REGISTER AND LOGIN)
async function GoogleAccountOauth(user) {
  return await usersSchema.create(user);
}

async function DashboardDetails() {
  const usersCount = await usersSchema.countDocuments();
  const productCount = await productSchema.countDocuments();
  const peindingOrder = await orderSchema.countDocuments({
    order_status: "pending",
  });
  const totalFundsAggregate = await orderSchema.aggregate([
    {
      $group: {
        _id: null,
        totalFunds: { $sum: "$totalPrice" },
      },
    },
  ]);

  return { usersCount, productCount, peindingOrder, totalFundsAggregate };
}

module.exports = {
  getAllUser,
  addNewUser,
  userLogin,
  userProfile,
  addNewAdmin,
  getOneUser,
  editUserProfile,
  checkEmail,
  saveResetCode,
  cheackCode,
  resetPassword,
  GoogleAccountOauth,
  DashboardDetails,
};

// TODO  add validation on reseet password function
