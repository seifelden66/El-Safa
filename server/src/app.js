//app.js
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// const helmet = require("helmet");
const requestIp = require("request-ip");
const api = require("./routes/api");
// const cspConfig = require("./util/helmet.config");
const OauthGoogle = require("./routes/users/oauth-register.router");
const { httpOlinePayment } = require("./controllers/orders.controller");
const {httpNewOrders} = require("./controllers/orders.controller")
const {
  passportInitialize,
  passportAuthenticate,
} = require("./services/auth/isLogin");

const app = express();
app.use(requestIp.mw());
// Use helmet with CSP
// app.use(helmet());
// app.use(
//   helmet({
//     contentSecurityPolicy: cspConfig,
//   })
// );
app.use(cors({ origin: "*" }));

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public", "browser")));
app.use("/v1", api);

app.use("/", OauthGoogle);

// SECTION - start payment getway route flow
app.get("/state", (req, res) => {
  const { success } = req.query;
  if (success && success === "true") {
    res.send("success");
  } else {
    res.send("your process has failed");
  }
});
app.post("/payProcessed", httpOlinePayment);
app.post("/postOrder", passportInitialize, passportAuthenticate, httpNewOrders);
// !SECTION - end payment getway route flow

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "browser", "index.html"));
});
module.exports = app;
