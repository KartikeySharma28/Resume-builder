

require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors(({
    origin: 'http://localhost:5173'
})));
app.use(express.json());
app.use('/api', routes);

module.exports = app;

