require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  password: process.env.PASS,
  database: process.env.DB_NAME
});

module.exports = pool;
