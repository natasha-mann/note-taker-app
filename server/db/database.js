const fs = require("fs");
const path = require("path");

const read = (fileName) => {
  const data = fs.readFileSync(
    path.join(__dirname, `../db/${fileName}.json`),
    "utf-8"
  );
  return data;
};

module.exports = read;
