const express = require("express");
const router = require("./router");
const app = express();
const port = 8080;

app.use(express.json());

app.use("/api", router)

app.listen(port, async () => {
    console.log(`Server started in ${port}`);
});