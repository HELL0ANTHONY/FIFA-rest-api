const { pool } = require("../db");

const getPlayers = async (req, res, next) => {
  // const { Page, Name } = req.body;

  const count = await pool.query("SELECT COUNT(*) FROM players");
  const response = await pool.query("SELECT * FROM players");
  return await res.json(count.rows[0].count);
};

module.exports = getPlayers;
