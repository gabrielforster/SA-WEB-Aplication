const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

sequelize.authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

const movies = sequelize.define(
    "movies",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: false,
        updatedAt: false,
    }
);

sequelize.sync();
module.exports = {movies}