//server.js
const http = require("http");
require("dotenv").config();
const { mongoConnect } = require("./util/mongo.db");

const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
