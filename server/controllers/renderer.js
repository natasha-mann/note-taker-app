const path = require("path");

const renderer = (fileName) => (req, res) => {
  const filePath = path.join(__dirname, `../../public/${fileName}.html`);
  res.sendFile(filePath);
};

module.exports = renderer;
