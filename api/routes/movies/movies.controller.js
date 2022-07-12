const express = require("express");

const router = express.Router();

const moviesHandler = require("./movies.handler");

router.get("/", async (req, res) => {
    res.json(await moviesHandler.searchMovies());
})

router.get("/:id", (req, res) => {

})

router.post("/", async (req, res) => {
    res.json(await moviesHandler.createMovie(req.body));
})

router.patch("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})

module.exports = router;