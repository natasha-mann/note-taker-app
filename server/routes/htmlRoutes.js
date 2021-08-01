const { Router } = require("express");

const renderer = require("../controllers/renderer");

const router = Router();

// should return the notes.html file.
router.get("/notes", renderer("notes"));

// should return the index.html file.
router.get("*", renderer("index"));

module.exports = router;
