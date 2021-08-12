const { pool } = require("../db");

const chargePlayers = async () => {
  const countResponse = await pool.query("SELECT COUNT(*) FROM players");
  const count = Number.parseInt(countResponse.rows[0].count);
  if (!count) {
    console.log("hello");
  }
};

module.exports = chargePlayers;
