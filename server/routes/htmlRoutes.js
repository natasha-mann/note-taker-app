const express = require("express");

const router = express.Router();

// should return the index.html file.
router.get("*");

// should return the notes.html file.
router.get("/notes");

module.exports = router;
