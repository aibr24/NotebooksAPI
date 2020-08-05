const Notebook = require("./Notebook");

const Note = require("./Note");

Notebook.hasMany(Note, {
  as: "notes",
  foreignKey: "notebookId",
  allowNull: false,
});

Note.belongsTo(Notebook, { as: "notebook", allowNull: false });

module.exports = { Notebook, Note };
