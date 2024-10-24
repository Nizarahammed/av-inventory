const express = require('express');
const connectDB = require('./app/helpers/db');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

const app = express()

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

connectDB();

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen('3001', () => {
    console.log('server started at port 3001');
});