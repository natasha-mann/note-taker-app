const fs = require("fs");

const { readFromFile, writeToFile } = require("../db/database");

const getNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  res.json(data);
};

const postNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));

  const note = req.body;
  data.push(note);
  res.json(note);

  console.log(data);
  writeToFile("db", JSON.stringify(data));
};

module.exports = { getNotes, postNotes };
