const { Note } = require("../db/models");

exports.noteList = async (req, res, next) => {
  try {
    const note = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(note);
    console.log(note);
  } catch (error) {
    console.log("NOTE List ---->", error);
  }
};
