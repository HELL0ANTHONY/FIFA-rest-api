const http = require("http");
const server = require("./src/server");
const logging = require("./src/helpers/logging");
const config = require("./src/config");
const sequelize = require("./src/models/db");
const chargePlayers = require("./src/seeders/chargePlayers");

const NAMESPACE = "Index";
const httpServer = http.createServer(server);

sequelize
  .sync({ force: true })
  .then(async () => {
    await chargePlayers();
  })
  .then(() => {
    httpServer.listen(config.server.port, () =>
      logging.info(
        NAMESPACE,
        `Server running on ${config.server.hostname}:${config.server.port}`
      )
    );
  });
