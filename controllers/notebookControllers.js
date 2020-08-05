const { Notebook } = require("../db/models");

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
    });
    res.json(notebooks);
    console.log(notebooks);
  } catch (error) {
    console.log("NOTEBOOK List ---->", error);
  }
};
