const crud = require("../../db/index");
 
async function searchMovies() {
    return await crud.get();
}

function searchMovie() {

}

async function createMovie(data) {
    return await crud.create(data)
}

function updateMovie() {

}

function removeMovie() {

}


module.exports = {
    searchMovies, searchMovie, createMovie, updateMovie, removeMovie
}
