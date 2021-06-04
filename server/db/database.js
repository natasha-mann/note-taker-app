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
    throw error;
  }
};

const writeToFile = (fileName, data) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, `../db/${fileName}.json`),
      JSON.stringify(data)
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { readFromFile, writeToFile };
