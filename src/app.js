

require('dotenv').config();
const path = require("path");

const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(
  "/templates",
  express.static(path.join(__dirname, "templates"))
);

app.use(cors(({
    origin: 'http://localhost:5173'
})));
app.use(express.json());
app.use('/api', routes);

module.exports = app;

