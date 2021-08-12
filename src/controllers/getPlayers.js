const { Op } = require("sequelize");
const Player = require("../models/player");

const getPlayers = async (req, res, next) => {
  const { Name, Page } = req.body;
  const pageAsNumber = Number.parseInt(Page);
  const LIMIT = 5;
  const page = (pageAsNumber - 1) * LIMIT;

  const teamPlayers = await Player.findAndCountAll({
    limit: LIMIT,
    offset: page,
    where: {
      team: {
        [Op.iLike]: Name.toLowerCase()
      }
    }
  });

  res.json({
    Page: pageAsNumber,
    totalPages: Math.ceil(teamPlayers.count / LIMIT),
    Items: LIMIT,
    totalItems: teamPlayers.rows.length,
    Players: teamPlayers.rows
  });
};

module.exports = getPlayers;
