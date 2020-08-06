const express = require("express");

const router = express.Router();

const {
  noteList,
  updateNote,
  fetchNote,
} = require("../controllers/noteControllers");

router.param("noteId", async (req, res, next, noteId) => {
  const note = await fetchNote(noteId, next);
  if (note) {
    req.note = note;
    next();
  } else {
    const err = new Error("Note not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", noteList);

router.put("/:noteId", updateNote);

module.exports = router;
