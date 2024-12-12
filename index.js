const express = require('express');
const connectDB = require('./app/helpers/db');
const routes = require('./app/routes');
const path = require("path");
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001;

app.use(express.json())

connectDB();

app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, './av-client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./av-client/build", "index.html"));
});

app.listen(port, () => {
    console.log('server started at port 3001');
});