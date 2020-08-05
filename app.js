const express = require(express);
const db = require("./db/db");
const app = express();

const run = async () => {
  try {
    await db.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  app.listen(8000);
};
