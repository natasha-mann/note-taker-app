const express = require("express");

const router = express.Router();

router.get("*", getIndex);

router.get("/notes", generateNotes);

module.exports = router;
