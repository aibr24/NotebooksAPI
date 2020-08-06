const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const run = async () => {
  try {
    await db.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  const notebookRoutes = require("./routes/notebooks");
  const noteRoutes = require("./routes/notes");

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/notebooks", notebookRoutes);
  app.use("/notes", noteRoutes);
  app.listen(8000);
};

run();
