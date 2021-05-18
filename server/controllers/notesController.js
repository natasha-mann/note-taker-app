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

  // Return the note to user without ID
  const { title, message } = req.body;
  const newNote = { title, message, id, dateTime };

  // Add ID to the note before writing to database
  const id = uuidv4();

  // Add timestamp to note
  const dateTime = moment().format("DD/MM/YY, HH:mm:ss");

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
  const updatedData = readFromFile("db");
  res.json(updatedData);
};

module.exports = { getNotes, postNotes, updateNotes, deleteNotes };
