const { Router } = require("express");

const { renderHome, renderNotes } = require("../controllers/renderer");

const router = Router();

// should return the notes.html file.
router.get("/notes", renderNotes);

// should return the index.html file.
router.get("*", renderHome);

module.exports = router;
