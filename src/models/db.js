require("dotenv").config();
const Sequelize = require("sequelize");
const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

async function isConnect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
isConnect();

module.exports = sequelize;
