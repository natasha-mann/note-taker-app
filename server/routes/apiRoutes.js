const express = require("express");

const { getNotes, postNotes } = require("../controllers/notesController");

const router = express.Router();

//should read from db.json file and return all saved notes as JSON
router.get("/notes", getNotes);

// should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post("/notes", postNotes);

module.exports = router;
