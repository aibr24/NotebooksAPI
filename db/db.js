const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "A619916a",
  database: "notebook_db",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
