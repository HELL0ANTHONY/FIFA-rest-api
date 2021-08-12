const { Op } = require("sequelize");
const Player = require("../models/player");

const getPlayers = async (req, res, next) => {
  const { search, order, page } = req.query;
  const pageAsNumber = Number.parseInt(page);
  const LIMIT = 10;
  const pageNumber = (pageAsNumber - 1) * LIMIT;

  if (pageNumber < 0) {
    return res.status(404).send("Page not found");
  }

  let playersOrder = "asc";
  if (order !== undefined && order.length) {
    playersOrder = order;
  }

  const players = await Player.findAndCountAll({
    limit: LIMIT,
    offset: pageNumber,
    where: {
      name: {
        [Op.iLike]: `%${search.toLowerCase()}%`
      }
    },
    order: [["name", playersOrder]]
  });

  return res.json({
    Page: pageAsNumber,
    totalPages: Math.ceil(players.count / LIMIT),
    Items: LIMIT,
    totalItems: players.rows.length,
    Players: players.rows
  });
};

module.exports = getPlayers;
