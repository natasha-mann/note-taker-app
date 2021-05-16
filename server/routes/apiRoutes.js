const express = require("express");

const router = express.Router();

router.get("/api/notes", getData);

router.post("/api/notes", postData);

module.exports = router;
