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

exports.fetchNote = async (noteId) => {
  try {
    const note = await Note.findByPk(noteId);
    return note;
  } catch (error) {
    console.log("FETCH NOTEBOOK ---->", error);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    await req.note.update(req.body);
    res.status(204).end();
  } catch (error) {
    console.log("UPDATE NOTE ----->", error);
  }
};
