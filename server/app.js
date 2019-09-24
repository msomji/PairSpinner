require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const pairs = require('./api/pairs');
const teams = require('./api/teams');
require('./database');
const port = process.env.PORT || 8080; // default port to listen

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `${process.env.ALLOWED_ORIGINS}`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.listen(port, () => console.log(`server started at http://localhost:${port}`));

app.use('/api', pairs);
app.use('/api', teams);
