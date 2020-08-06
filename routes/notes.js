const express = require("express");

const router = express.Router();

const { noteList } = require("../controllers/noteControllers");

router.get("/", noteList);

module.exports = router;
