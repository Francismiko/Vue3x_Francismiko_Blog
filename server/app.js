const express = require('express');
const app = express();
const config = require('./config');
require("./model")

app.use(express.static("./"));

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.listen(config.app.port, () => {
    console.log(`Running on http://localhost:${config.app.port}`);
});
console.log(config.app.port);