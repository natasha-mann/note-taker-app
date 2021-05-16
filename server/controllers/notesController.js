const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

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

  // Add timestamp to note
  const dateTime = moment().format("DD/MM/YY, HH:mm:ss");
  req.body.dateTime = dateTime;

  data.push(note);

  writeToFile("db", JSON.stringify(data));
};

const updateNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));
  const { id } = req.params;

  const index = data.findIndex((note) => note.id === id);

  const updatedNote = req.body[index];

  console.log(updatedNote);

  // writeToFile("db", JSON.stringify(newData));
  // const updatedData = JSON.parse(readFromFile("db"));
  // res.json(updatedData);
};

const deleteNotes = (req, res) => {
  const data = JSON.parse(readFromFile("db"));
  const { id } = req.params;
  const newData = data.filter((note) => note.id !== id);

  writeToFile("db", JSON.stringify(newData));
  const updatedData = JSON.parse(readFromFile("db"));
  res.json(updatedData);
};

module.exports = { getNotes, postNotes, updateNotes, deleteNotes };
