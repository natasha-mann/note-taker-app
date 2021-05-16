const express = require("express");

const { renderHome, renderNotes } = require("../controllers/renderer");

const router = express.Router();

// should return the index.html file.
router.get("/", renderHome);

// should return the notes.html file.
router.get("/notes", renderNotes);

module.exports = router;
