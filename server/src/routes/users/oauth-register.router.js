const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const {
  httpGoogleAccountOauth,
} = require("../../controllers/users.controller");
const { generateAndSetToken } = require("../../services/auth/jwt");
require("dotenv").config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

passport.use(new Strategy(AUTH_OPTIONS, httpGoogleAccountOauth));

const registerWithGoogleOauth = express.Router();

registerWithGoogleOauth.use(passport.initialize());

registerWithGoogleOauth.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    prompt: "select_account",
  })
);

registerWithGoogleOauth.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
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

// registerWithGoogleOauth.get("/failure", (req, res) => {
//   res.status(400).send("This email is already registered.");
// });

module.exports = registerWithGoogleOauth;
