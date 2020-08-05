const express = require("express");

const router = express.Router();

const { noteCreate, noteList } = require("../controllers/noteControllers");

router.get("/", noteList);

module.exports = router;
