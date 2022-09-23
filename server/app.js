const express = require("express");
const config = require("./config");
const morgan = require("morgan");
const cors = require("cors");
require("./model")

const app = express();

app.use(express.static("./"));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", require("./routes"));

app.get("/", (req, res) => {
    res.send('get ok');
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send('post ok');
})

app.listen(config.app.port, () => {
    console.log(`Running on http://localhost:${config.app.port}`);
});