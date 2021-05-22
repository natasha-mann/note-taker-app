const fs = require("fs");
const path = require("path");

const readFromFile = (fileName) => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, `../db/${fileName}.json`),
      "utf-8"
    );
    return JSON.parse(data);
  } catch (error) {
    console.log("Error", error);
  }
};

const writeToFile = (fileName, data) => {
  try {
    fs.writeFileSync(path.join(__dirname, `../db/${fileName}.json`), data);
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { readFromFile, writeToFile };
