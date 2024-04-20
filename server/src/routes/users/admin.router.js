const express = require("express");
const { handleFile, upload } = require("../../services/handleFile");
const {
  httpAddAdmin,
  httpGetAllUser,
  httpGetUser,
} = require("../../controllers/users.controller");
const { validationUserDate } = require("../../services/validateUserData");
const {
  passportAuthenticate,
  passportInitialize,
} = require("../../services/auth/isLogin");

// NOTE - All Route Here Is Protected

const adminRouter = express.Router();
adminRouter.use(passportInitialize);
adminRouter.use(passportAuthenticate);

adminRouter.use((req, res, next) => {
  if (req.user.role != "admin") {
    return res
      .status(403)
      .json({ error: "You are not authorized to access this page" });
  }
  next();
});

adminRouter.get("/all-users", httpGetAllUser);
adminRouter.post(
  "/register",
  upload.single("file"),
  handleFile,
  validationUserDate,
  httpAddAdmin
);
adminRouter.get("/user", httpGetUser);
module.exports = adminRouter;
