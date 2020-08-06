const { Notebook, Note } = require("../db/models");

exports.fetchNotebook = async (notebookId) => {
  try {
    const notebook = await Notebook.findByPk(notebookId);
    return notebook;
  } catch (error) {
    console.log("FETCH NOTEBOOK ---->", error);
  }
};

exports.notebookCreate = async (req, res, next) => {
  try {
    const newNotebook = await Notebook.create(req.body);
    res.status(201).json(newNotebook);
  } catch (error) {
    console.log("NOTEBOOK CREATE ---->", error);
  }
};

exports.notebookList = async (req, res, next) => {
  try {
    const notebooks = await Notebook.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Note,
        as: "notes",
        attributes: ["id"],
      },
    });
    res.json(notebooks);
    console.log(notebooks);
  } catch (error) {
    console.log("NOTEBOOK List ---->", error);
  }
};

exports.noteCreate = async (req, res, next) => {
  console.log(req);
  try {
    req.body.notebookId = req.notebook.id;
    const newNote = await Note.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    console.log("NOTE CREATE ---->", error);
  }
};
