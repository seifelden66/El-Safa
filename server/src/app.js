//app.js
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const express = require("express");
const morgan = require("morgan");
const api = require("./routes/api");
const productRouter = require('./routes/products/products.router'); 
const categoriesRouter = require('./routes/cetgories/categories.route')

const ObjectId = mongoose.Types.ObjectId;
const app = express();

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);

app.use("/v1", api);

module.exports = app;
