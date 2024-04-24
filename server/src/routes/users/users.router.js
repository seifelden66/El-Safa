const express = require("express");
const rateLimiter = require("../../services/auth/ratelimiter");
const { handleFile, upload } = require("../../services/handleFile");
const {
  httpAddUser,
  httpEditUserProfile,
  httpLoginWithEmail,
  httpUserProfile,
  httpForgotPasswordEmail,
  httpResetPassword,
  httpCheckCode,
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

//ANCHOR - forgot password cheack email
usersRouter.post("/forgor-password-email", httpForgotPasswordEmail);
// NOTE - this 2 routes (send code and reset password is protected cant access them unless you have token)
usersRouter.post(
  "/forgot-password-code",
  passportInitialize,
  passportAuthenticate,
  httpCheckCode
);
usersRouter.patch(
  "/new-password",
  passportInitialize,
  passportAuthenticate,
  httpResetPassword
);
module.exports = usersRouter;
