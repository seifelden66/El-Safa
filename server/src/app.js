//app.js
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const helmet = require("helmet");
const requestIp = require("request-ip");
const api = require("./routes/api");
// const cspConfig = require("./util/helmet.config");
const registerWithGoogleOauth = require("./routes/users/oauth-register.router");
const loginWithGoogleOauth = require("./routes/users/oauth.login.router");
const app = express();
app.use(requestIp.mw());
// Use helmet with CSP
// app.use(helmet());
// app.use(
//   helmet({
//     contentSecurityPolicy: cspConfig,
//   })
// );
app.use(cors({ origin: "http://localhost:4200" }));

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public", "browser")));
app.use("/v1", api);

app.use("/register", registerWithGoogleOauth);
// app.use("/login", loginWithGoogleOauth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "browser", "index.html"));
});

module.exports = app;
