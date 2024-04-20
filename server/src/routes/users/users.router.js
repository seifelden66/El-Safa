const express = require("express");
const rateLimiter = require("../../services/auth/ratelimiter");
const { handleFile, upload } = require("../../services/handleFile");
const {
  httpAddUser,
  httpEditUserProfile,
  httpLoginWithEmail,
  httpUserProfile,
} = require("../../controllers/users.controller");
const {
  validationUserDate,
  validateUserDataProfile,
} = require("../../services/validateUserData");
const {
  passportAuthenticate,
  passportInitialize,
} = require("../../services/auth/isLogin");

const usersRouter = express.Router();

// ANCHOR - user register
usersRouter.post(
  "/register",
  upload.single("file"),
  handleFile,
  validationUserDate,
  httpAddUser
);

// ANCHOR - function login user and admin
usersRouter.post("/login", rateLimiter, httpLoginWithEmail);

// ANCHOR function profile user and admin
// NOTE - Protected profile route
usersRouter.get(
  "/profile",
  passportInitialize,
  passportAuthenticate,
  httpUserProfile
);

// ANCHOR function edit user profile
usersRouter.put(
  "/editProfile",
  passportInitialize,
  passportAuthenticate,
  upload.single("file"),
  handleFile,
  validateUserDataProfile,
  httpEditUserProfile
);
usersRouter.get("/test", (req, res) => {
  res.status(200).json({ hi: "kareem" });
});
module.exports = usersRouter;
