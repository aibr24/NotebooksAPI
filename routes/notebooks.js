const express = require("express");

const router = express.Router();

const {
  noteCreate,
  notebookCreate,
  notebookList,
  fetchNotebook,
} = require("../controllers/notebookControllers");

router.param("notebookId", async (req, res, next, notebookId) => {
  const notebook = await fetchNotebook(notebookId, next);
  if (notebook) {
    req.notebook = notebook;
    next();
  } else {
    const err = new Error("Notebook not found");
    err.status = 404;
    next(err);
  }
});

router.post("/:notebookId/notes", noteCreate);

router.post("/", notebookCreate);

router.get("/", notebookList);

module.exports = router;
