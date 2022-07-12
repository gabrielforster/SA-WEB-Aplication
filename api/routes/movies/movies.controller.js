const express = require("express");

const router = express.Router();

const moviesHandler = require("./movies.handler");

router.get("/movies", (req, res) => {
    moviesHandler.searchMovies();
})

router.get("/movies/:id", (req, res) => {

})

router.post("/movies", (req, res) => {

})

router.patch("/movies/:id", (req, res) => {

})

router.delete("/movies/:id", (req, res) => {

})

module.exports = router;