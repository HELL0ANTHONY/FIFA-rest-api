const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const { STRING } = DataTypes;
const Player = sequelize.define(
  "player",
  {
    name: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    position: {
      type: STRING
    },
    nation: {
      type: STRING
    },
    team: {
      type: STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = Player;
