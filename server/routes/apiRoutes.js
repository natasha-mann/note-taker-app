const express = require("express");

const {
  getNotes,
  postNotes,
  deleteNotes,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/notes", getNotes);

router.post("/notes", postNotes);

router.delete("/notes/:id", deleteNotes);

module.exports = router;
