const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const {
  httpLoginWithGoogleAccount,
} = require("../../controllers/users.controller");
const { generateAndSetToken } = require("../../services/auth/jwt");
require("dotenv").config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/login/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

passport.use(new Strategy(AUTH_OPTIONS, httpLoginWithGoogleAccount));

const loginWithGoogleOauth = express.Router();

loginWithGoogleOauth.use(passport.initialize());

loginWithGoogleOauth.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

loginWithGoogleOauth.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/f-login",
    session: false,
  }),
  async (req, res) => {
    try {
      const sub = req.user._json.sub;
      const token = generateAndSetToken(sub, "user");
      res.cookie("userToken", token, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.redirect("/home");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

// loginWithGoogleOauth.get("/f-login", (req, res) => {
//   res.status(401).send("Authentication failed. Please register first.");
// });

module.exports = loginWithGoogleOauth;
