const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const requestIp = require("request-ip");
const api = require("./routes/api");
const productRouter = require('./routes/products/products.router'); 
const categoriesRouter = require('./routes/cetgories/categories.route')

const ObjectId = mongoose.Types.ObjectId;
const app = express();

app.use(requestIp.mw());
app.use(helmet());
app.use(cors({ origin: "http://localhost:4200" }));

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);

app.use(express.static(path.join(__dirname, "..", "public", "browser")));
app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "browser", "index.html"));
});

module.exports = app;
