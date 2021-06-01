const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const { readFromFile, writeToFile } = require("../db/database");

const getNotes = (req, res) => {
  try {
    const data = readFromFile("db");

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const postNotes = (req, res) => {
  try {
    const data = readFromFile("db");

    const { title, text } = req.body;

    // Add ID to the note
    const id = uuidv4();

    // Add timestamp to note
    const dateTime = moment().format("DD/MM/YY, HH:mm:ss");

    const newNote = { title, text, id, dateTime };

    writeToFile("db", [newNote, ...data]);

    res.json(newNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updateNotes = (req, res) => {
  try {
    const data = readFromFile("db");

    const { title, text } = req.body;

    const { id } = req.params;

    const index = data.findIndex((each) => each.id === id);

    // find -> {title, text}
    // filter
    // [findafteredit, ...filtered]

    data[index].title = title;
    data[index].text = text;
    data[index].dateTime = moment().format("DD/MM/YY, HH:mm:ss");

    writeToFile("db", data);

    res.status(200).json({ message: "Note successfully updated." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteNotes = (req, res) => {
  try {
    const data = readFromFile("db");
    const { id } = req.params;
    const newData = data.filter((note) => note.id !== id);

    writeToFile("db", newData);

    res.status(200).json({ message: "Note successfully deleted." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getNotes, postNotes, updateNotes, deleteNotes };
