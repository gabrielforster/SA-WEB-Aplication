const crud = require("../../db/index");
 
async function searchMovies() {
    return await crud.get();
}

async function searchMovie(id) {
    return await crud.getById(id);
}

async function createMovie(data) {
    return await crud.create(data);
}

async function updateMovie(id, data) {
    return await crud.update(id, data);
}

function removeMovie() {

}


module.exports = {
    searchMovies, searchMovie, createMovie, updateMovie, removeMovie
}
