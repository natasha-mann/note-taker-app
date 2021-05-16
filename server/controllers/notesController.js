const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../db/database");

const getNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  res.json(data);
};

const postNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  // Return the note to user without ID
  const note = req.body;
  res.json(note);

  // Add ID to the note before writing to database
  const ID = uuidv4();
  req.body.id = ID;
  data.push(note);

  writeToFile("db", JSON.stringify(data));
};

const deleteNotes = (req, res) => {
  // read notes from db.json
  const data = JSON.parse(readFromFile("db"));
  // find and remove note with given ID query parameter
  const { id } = req.params;
  const newData = data.filter((note) => note.id !== id);
  // rewrite notes to db.json
  writeToFile("db", JSON.stringify(newData));
};

module.exports = { getNotes, postNotes, deleteNotes };
