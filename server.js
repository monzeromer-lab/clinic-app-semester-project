const express = require('express');
const app = express();

app.use("/", express.static("./"))

app.get("/", (req, res) => {
    res.sendFile("/front/index.html");
});

app.listen(3000);