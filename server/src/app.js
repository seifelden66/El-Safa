const fs = require("fs");
const path = require("path");
const express = require("express");
// const cors = require("cors"); // TODO
const morgan = require("morgan");
// const helmet = require("helmet"); // TODO
const api = require("./routes/api");
const app = express();

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());

app.use("/v1", api);

module.exports = app;
