const express = require("express");

const router = express.Router();

router.get("/api/notes");

router.post("/api/notes");

module.exports = router;
