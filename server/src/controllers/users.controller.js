const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const {
  getAllUser,
  addNewUser,
  addNewAdmin,
  userLogin,
  userProfile,
  getOneUser,
  editUserProfile,
} = require("../models/users/users.model");
const generateAndSetToken = require("../services/auth/jwt");
const comparePasswords = require("../services/auth/comparePassword");

// NOTE USER AND ADMIN IN ONE CONTROLLER

// SECTION - START SECTION USER (CUSTOMER)
// ANCHOR function add user by email
async function httpAddUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) {
      fs.unlinkSync(
        path.join(
          __dirname,
          "..",
          "..",
          "public",
          "browser",
          "assets",
          "image",
          req.file.filename
        )
      );
    }
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    if (req.file && req.file.filename) {
      req.body.profile_picture = req.file.filename;
    }
    const user = await addNewUser(req.body);
    const { _id, role } = user;
    const token = generateAndSetToken(_id, role);
    res.cookie("Token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ success: "success insert" });
  } catch (error) {
    if (error.code === 11000) {
      if (req.file) {
        fs.unlinkSync(
          path.join(
            __dirname,
            "..",
            "..",
            "public",
            "browser",
            "assets",
            "image",
            req.file.filename
          )
        );
      }
      res.status(400).json({ error: "email is already exist" });
    } else {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
// ANCHOR - edit user profile , amdin and customer
async function httpEditUserProfile(req, res) {
  // NOTE - users can modifay role even if he is admin
  if (req.body.role) {
    return res.status(403).json({
      error: "You are not allowed to modify the 'role' field",
    });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) {
      fs.unlinkSync(
        path.join(
          __dirname,
          "..",
          "..",
          "public",
          "browser",
          "assets",
          "image",
          req.file.filename
        )
      );
    }
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.file && req.file.filename) {
      req.body.profile_picture = req.file.filename;
    }
    await editUserProfile(req.body, req.user.id);
    return res.json({ message: req.body });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// !SECTION - END SECTION USER, (CUSTOMER)

// SECTION - START SECTION ADMIN
// ANCHOR - add new admin
async function httpAddAdmin(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) {
      fs.unlinkSync(
        path.join(
          __dirname,
          "..",
          "..",
          "public",
          "browser",
          "assets",
          "image",
          req.file.filename
        )
      );
    }
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.file && req.file.filename) {
      req.body.profile_picture = req.file.filename;
    }
    const user = await addNewAdmin(req.body);
    return res.status(201).json({ success: "success insert" });
  } catch (error) {
    if (error.code === 11000) {
      if (req.file) {
        fs.unlinkSync(
          path.join(
            __dirname,
            "..",
            "..",
            "public",
            "browser",
            "assets",
            "image",
            req.file.filename
          )
        );
      }
      res.status(400).json({ error: "email is already exist" });
    } else {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
// ANCHOR GET /all user for admin (not all user data)
async function httpGetAllUser(req, res) {
  try {
    const users = await getAllUser();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// ANCHOR - GET /one user
async function httpGetUser(req, res) {
  try {
    const user = await getOneUser(req.query.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// !SECTION - END SECTION AMDIN

// ANCHOR login function
// NOTE - this login function for admin and user
// return diff name token for user and admin
async function httpLoginWithEmail(req, res) {
  try {
    const user = await userLogin(req.body);
    if (user) {
      const check = await comparePasswords(req.body.password, user.password);
      if (check) {
        const { _id, role } = user;
        const token = generateAndSetToken(_id, role);
        const TokenName = role == "admin" ? "adminToken" : "userToken";
        res.cookie(TokenName, token, {
          httpOnly: true,
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ success: "welcome back" });
      } else {
        return res.status(401).json({ error: "Invalid data" });
      }
    } else {
      return res.status(401).json({ error: "Invalid data" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// ANCHOR profile
// NOTE - this function for user and admin
async function httpUserProfile(req, res) {
  try {
    const user = await userProfile(req.user);
    if (user) {
      return res.status(200).json({ user: user });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  httpGetAllUser,
  httpGetUser,
  httpAddUser,
  httpAddAdmin,
  httpLoginWithEmail,
  httpUserProfile,
  httpEditUserProfile,
};
