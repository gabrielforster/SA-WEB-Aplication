const express = require("express");

const router = express.Router();

const movies = require("./routes/movies/movies.controller")

router.use("/movies", movies);

module.exports = router;