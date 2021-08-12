const { pool } = require("../models/db");
// BORRAR DESPUES DE HACER LA PRUEBA
const getPlayersFromAPI = require("../helpers/getPlayersFromAPI");

const getPlayers = async (req, res, next) => {
  // const { Page, Name } = req.body;
  // const count = await pool.query("SELECT COUNT(*) FROM players");
  // const response = await pool.query("SELECT * FROM players");

  const players = await getPlayersFromAPI();

  // return await res.json(count.rows[0].count);
  return res.json(players);
};

module.exports = getPlayers;
