const express = require("express");

const router = express.Router();

const moviesHandler = require("./movies.handler");

router.get("/movies", async (req, res) => {
    return await moviesHandler.searchMovies();
})

router.get("/movies/:id", (req, res) => {

})

router.post("/movies", (req, res) => {
    return await moviesHandler.createMovie(req.body);
})

router.patch("/movies/:id", (req, res) => {

})

router.delete("/movies/:id", (req, res) => {

})

module.exports = router;