const express = require('express');
const connectDB = require('./app/helpers/db');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const path = require("path");
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

connectDB();

app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, './av-client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./av-client/build", "index.html"));
});

app.listen('3001', () => {
    console.log('server started at port 3001');
});