const express = require("express");
// const { sequelize } = require("./db/tables");
const router = require("./router");
const app = express();
const port = 8080;

app.use(express.json());

app.use("/api", router)

app.listen(port, async () => {
    // await sequelize.sync();
    console.log(`Server started in ${port}`);
});