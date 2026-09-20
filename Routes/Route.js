const express = require("express");
const router = express.Router();

// Controller se submitContact function ko import karein
const { submitContact } = require("../Controllers/Controller.js");

// POST route setup
router.post("/", submitContact);

module.exports = router;