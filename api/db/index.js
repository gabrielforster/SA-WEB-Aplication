// funcoes do banco

const db = require("./tables");

async function get(){
    const movie = await db.findAll()
    return movie;
}


module.exports = {get};