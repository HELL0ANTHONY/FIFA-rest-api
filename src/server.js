const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logging = require("./helpers/logging");
const routes = require("./routes");

const NAMESPACE = "Server";
const server = express();

server.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `METHOD [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );
  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}] STATUS - [${res.status}]`
    );
  });
  next();
});

server.use(helmet());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200);
  }
  next();
});

server.use("/", routes);
server.disable("etag");

// server.use((req, res, next) => {
//   const error = new Error("Not Found");
//   return res.status(404).json({
//     message: error.message
//   });
// });

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
