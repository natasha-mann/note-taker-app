const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../db/database");

const getNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  res.json(data);
};

const postNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  // add unique ID to the note?
  const ID = uuidv4();
  req.body.id = ID;

  const note = req.body;
  data.push(note);
  res.json(note);
  console.log(note);

  writeToFile("db", JSON.stringify(data));
};

module.exports = { getNotes, postNotes };
