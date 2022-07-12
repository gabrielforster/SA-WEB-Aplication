// funcoes do banco

const { movies } = require("./tables");

async function get(){
    return await movies.findAll();
}

async function create(data){
    const {name, description} = data;
    const savedData = movies.create({name, description}).then(() => {
        return {"message": "success"};
    }).catch(() => {
        return {"message": "failed"};
    })
    return await savedData;
}


module.exports = {get, create};