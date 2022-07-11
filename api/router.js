const express = require("express");

const router = express.Router();

const films = require("./routes/films/films.controller")

router.use("/films", films);

module.exports = router;