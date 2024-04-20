const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const requestIp = require("request-ip");
const api = require("./routes/api");
<<<<<<< HEAD
=======
const productRouter = require('./routes/products/products.router'); // Correct import
const ObjectId = mongoose.Types.ObjectId;

const app = express();
>>>>>>> 9db4ca1 (made products simple crud api)

const app = express();
app.use(requestIp.mw());
app.use(helmet());
app.use(cors({ origin: "http://localhost:4200" }));
const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));
<<<<<<< HEAD
app.use(express.json());
// error handler midddleware
app.use((err, req, res, next) => {
  throw Error(err.stack);
});
=======
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products", productRouter);
>>>>>>> 9db4ca1 (made products simple crud api)

app.use(express.static(path.join(__dirname, "..", "public", "browser")));
app.use("/v1", api);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "browser", "index.html"));
});
module.exports = app;
