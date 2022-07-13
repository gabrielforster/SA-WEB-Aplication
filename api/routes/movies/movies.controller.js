const express = require("express");

const router = express.Router();

const moviesHandler = require("./movies.handler");

router.get("/", async (req, res) => {
    res.json(await moviesHandler.searchMovies());
})

router.get("/:id", async (req, res) => {
    res.json(await moviesHandler.searchMovie(req.params.id));
})

router.post("/", async (req, res) => {
    res.json(await moviesHandler.createMovie(req.body));
})

router.patch("/:id", async (req, res) => {
    res.json(await moviesHandler.updateMovie(req.params.id, req.body))
})

router.delete("/:id", (req, res) => {

})

module.exports = router;