const getPlayersFromAPI = require("../helpers/getPlayersFromAPI");
const Player = require("../models/player");

const chargePlayers = async () => {
  const count = await Player.count();
  if (!count) {
    const players = await getPlayersFromAPI();
    await Player.bulkCreate(players);
  }
};

module.exports = chargePlayers;
