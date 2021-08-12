const { Op } = require("sequelize");
const Player = require("../models/player");

const getTeams = async (req, res, next) => {
  const { Name, Page } = req.body;
  const pageAsNumber = Number.parseInt(Page);
  const LIMIT = 10;
  const page = (pageAsNumber - 1) * LIMIT;

  if (page < 0) {
    return res.status(404).send("Page not found");
  }

  if (Name === undefined) {
    return res.status(400).send("Bad Request");
  }

  const teams = await Player.findAndCountAll({
    limit: LIMIT,
    offset: page,
    where: {
      team: {
        [Op.iLike]: Name.toLowerCase().trim()
      }
    }
  });

  res.json({
    Page: pageAsNumber,
    totalPages: Math.ceil(teams.count / LIMIT),
    Items: LIMIT,
    totalItems: teams.rows.length,
    Players: teams.rows
  });
};

module.exports = getTeams;
