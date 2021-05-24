const { Router } = require("express");

const { renderHome, renderNotes } = require("../controllers/renderer");

const router = Router();

// should return the index.html file.
router.get("*", renderHome);

// should return the notes.html file.
router.get("/notes", renderNotes);

module.exports = router;
