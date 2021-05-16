const fs = require("fs");
const path = require("path");

const readFromFile = (fileName) => {
  const data = fs.readFileSync(
    path.join(__dirname, `../db/${fileName}.json`),
    "utf-8"
  );
  return data;
};

const writeToFile = (fileName, data) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Note added!");
    }
  };

  fs.writeFileSync(
    path.join(__dirname, `../db/${fileName}.json`),
    data,
    callback
  );
};

module.exports = { readFromFile, writeToFile };
