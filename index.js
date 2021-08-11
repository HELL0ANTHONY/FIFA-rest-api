const http = require("http");
const server = require("./src/server");
const logging = require("./src/helpers/logging");
const config = require("./src/config");

const NAMESPACE = "Index";
const httpServer = http.createServer(server);

httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  )
);
