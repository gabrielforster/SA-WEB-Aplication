const express = require("express");

const router = express.Router();

const filmsHandler = require("./films.handler");

router.get("/films", () => {
    filmsHandler.searcFilms();
})

router.get("/films/:id", () => {

})

router.post("/films", () => {

})

router.patch("/films/:id", () => {

})

router.delete("/films/:id", () => {

})

module.exports = router;