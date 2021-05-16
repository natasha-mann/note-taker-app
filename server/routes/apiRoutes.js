const express = require("express");

const {
  getNotes,
  postNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/notes", getNotes);

router.post("/notes", postNotes);

router.put("/notes/:id", updateNotes);

router.delete("/notes/:id", deleteNotes);

module.exports = router;
