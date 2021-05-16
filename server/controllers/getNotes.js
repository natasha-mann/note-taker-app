const read = require("../db/database");

const getNotes = (req, res) => {
  const data = JSON.parse(read("db"));

  res.json(data);
};

const postNotes = () => {
  console.log("hello");
};

module.exports = { getNotes, postNotes };
