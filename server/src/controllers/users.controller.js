const fs = require("fs");
const path = require("path");
const { validationResult, check } = require("express-validator");
const {
  getAllUser,
  addNewUser,
  addNewAdmin,
  userLogin,
  userProfile,
  getOneUser,
  editUserProfile,
  checkEmail,
  saveResetCode,
  cheackCode,
  resetPassword,
} = require("../models/users/users.model");
const {
  generateAndSetToken,
  generateEmailToken,
  generateResetToken,
} = require("../services/auth/jwt");
const comparePasswords = require("../services/auth/comparePassword");
const sendEmail = require("../services/sendEmail");
const resetPasswordCode = require("../services/auth/resetPasswordCode");
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
    // res.cookie("userToken", token, {
    //   httpOnly: true,
    //   secure: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    // NOTE - SEND WELCOME EMAIL TO USER
    await sendEmail({
      to: user.email,
      subject: "Welcome to ElSafa",
      html: `<h1>Welcome to ElSafa!</h1>
      <p>Dear <strong>${user.name}</strong>,</p>
      <p>We are thrilled to welcome you to ElSafa, your ultimate destination for online shopping.</p>
      <p>At ElSafa, you'll find a wide range of high-quality products at great prices, from fashion to electronics and much more.</p>
      <p>Here are a few things you can do to get started:</p>
      <ul>
        <li>Browse our catalog and discover amazing deals.</li>
        <li>Enjoy exclusive offers and discounts tailored just for you.</li>
        <li>Track your orders and enjoy quick login.</li>
        <li>Experience safe and reliable shopping.</li>
      </ul>
      <p>Start shopping now and make the most out of your experience!</p>
      <p>Best regards,<br/>The ElSafa Team</p>`,
    });
    return res.status(201).json({ success: token });
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

// SECTION - USER AND ADMIN
// NOTE - this section handle user and admin together
// ANCHOR login function
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
        // res.cookie(TokenName, token, {
        //   httpOnly: true,
        //   secure: true,
        //   maxAge: 24 * 60 * 60 * 1000,
        // });
        return res.status(200).json({ token: token, role: TokenName });
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

// ANCHOR - edit user profile
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
// ANCHOR - forgot password - check email
async function httpForgotPasswordEmail(req, res) {
  try {
    const user = await checkEmail(req.body.email);
    if (user) {
      const code = resetPasswordCode(); // genreate code to send it to user
      const expirationTime = new Date(); // expiration time
      expirationTime.setSeconds(expirationTime.getSeconds() + 30);
      const data = {
        email: req.body.email,
        code: code,
        expiration: expirationTime,
      };
      try {
        const response = await saveResetCode(data); // save email and code in database
        await sendEmail({
          to: req.body.email,
          subject: "ElSafa Team , reset password ",
          html: `
          <div style="font-family: Arial, sans-serif;">
              <h2 style="color: #2672ec;">Reset Your Password</h2>
              <p>To reset your password, please use the code below. The code will only be valid for 30 seconds.</p>
              <p style="font-weight: bold;">Password Reset Code: <strong style="color:#2672ec">${code}</strong></p>
              <p>If you didn't request a password reset, you can ignore this email.</p>
              <p>Best regards,<br/>ElSafa Team</p>
          </div>
         `,
        }); // send code to user via email
        // NOTE - send email token
        const token = generateEmailToken(response.email);
        // res.cookie("emailToken", token, {
        //   httpOnly: true,
        //   secure: true,
        //   maxAge: 5 * 60 * 1000,
        // });
        return res.status(200).json({
          emailToken: token,
        });
      } catch (error) {
        return res.status(400).json({ error: "please try again later" });
      }
    } else {
      return res.status(400).json({ error: "This user is not exist" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// ANCHOR - check code to reset password
async function httpCheckCode(req, res) {
  try {
    const checkStatus = await cheackCode(req.body.code, req.user.email);
    if (checkStatus) {
      const token = generateResetToken(checkStatus.email, checkStatus._id);
      // res.cookie("resetToken", token, {
      //   httpOnly: true,
      //   secure: true,
      //   maxAge: 5 * 60 * 1000,
      // });
      return res.status(200).json({ resetToken: token });
    }
    return res.status(400).json({ error: "Invalid code " });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// ANCHOR - reset password
async function httpResetPassword(req, res) {
  if (req.user.id) {
    try {
      resetPassword(req.user.email, req.body.newPassword);
      return res.status(200).json({ success: "Password reset successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(403).json({
      error: "somthing is wrong tray again",
    });
  }
}
// !SECTION - END SECTION USER AND ADMIN
module.exports = {
  httpGetAllUser,
  httpGetUser,
  httpAddUser,
  httpAddAdmin,
  httpLoginWithEmail,
  httpUserProfile,
  httpEditUserProfile,
  httpForgotPasswordEmail,
  httpCheckCode,
  httpResetPassword,
};
