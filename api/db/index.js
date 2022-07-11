// funcoes do banco

const db = require("./tables");

async function get(){
    const film = await db.findAll()
    return film;
}


module.exports = {get};