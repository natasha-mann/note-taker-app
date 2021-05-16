const read = require("../db/database");

const getNotes = (req, res) => {
  const data = JSON.parse(read("db"));

  res.json(data);
};

const postNotes = (req, res) => {
  const data = JSON.parse(read("db"));

  const note = req.body;
  console.log(req.body);
  console.log(note);

  data.push(note);

  res.json(note);
};

module.exports = { getNotes, postNotes };
