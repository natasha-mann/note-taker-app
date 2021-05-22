const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const { readFromFile, writeToFile } = require("../db/database");

const getNotes = (req, res) => {
  const data = readFromFile("db");

  res.json(data);
};

const postNotes = (req, res) => {
  const data = readFromFile("db");

  const { title, text } = req.body;

  // Add ID to the note
  const id = uuidv4();

  // Add timestamp to note
  const dateTime = moment().format("DD/MM/YY, HH:mm:ss");

  const newNote = { title, text, id, dateTime };

  data.push(newNote);

  writeToFile("db", JSON.stringify(data));

  res.json(newNote);
};

const updateNotes = (req, res) => {
  const data = readFromFile("db");

  const note = req.body;

  const { id } = req.params;

  const index = data.findIndex((each) => each.id === id);

  data[index].title = note.title;
  data[index].text = note.text;
  data[index].id = note.id;
  data[index].dateTime = moment().format("DD/MM/YY, HH:mm:ss");

  writeToFile("db", JSON.stringify(data));
  const updatedData = readFromFile("db");
  res.json(updatedData);
};

const deleteNotes = (req, res) => {
  const data = readFromFile("db");
  const { id } = req.params;
  const newData = data.filter((note) => note.id !== id);

  writeToFile("db", JSON.stringify(newData));

  res.status(200).send("Note successfully deleted.");
};

module.exports = { getNotes, postNotes, updateNotes, deleteNotes };
