const express = require("express");

const router = express.Router();

const {
  notebookCreate,
  notebookList,
} = require("../controllers/notebookControllers");

router.post("/", notebookCreate);

router.get("/", notebookList);

module.exports = router;
