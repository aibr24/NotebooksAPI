const express = require("express");

const router = express.Router();

const {
  noteCreate,
  notebookCreate,
  notebookList,
} = require("../controllers/notebookControllers");

router.post("/:notebookId/notes", noteCreate);

router.post("/", notebookCreate);

router.get("/", notebookList);

module.exports = router;
