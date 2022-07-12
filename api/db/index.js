// funcoes do banco

const { movies } = require("./tables");

async function get() {
    return await movies.findAll();
}

async function getById(id) {
    return await movies.findByPk(id);
}

async function create(data) {
    const { name, description } = data;
    const savedData = movies.create({ name, description }).then(() => {
        return { "message": "success" };
    }).catch(() => {
        return { "message": "failed" };
    })
    return await savedData;
}

async function update(id, data) {
    const { name, description } = data;
    try {
        return await movies.update({ name, description }, { where: { id: id } })
    } catch (error) {
        return { "message": error.message }
    }
}


module.exports = { get, getById, create, update };