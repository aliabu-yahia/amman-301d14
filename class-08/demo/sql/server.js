'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Application Setup
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();

// Database Connection Setup
const client = new pg.Client(DATABASE_URL);

// Routes
app.get('/', (request, response) => {
  response.status(200).send('ok');
});

app.get('/add', handelAddUsers);
app.get('/users', selectUsers);
// Add People, based on QueryString Params
function handelAddUsers(req, res) {
  const { first_name, last_name } = req.query;

  // const sqlQuery = `INSERT INTO users(first_name, last_name) VALUES(${first_name}, ${last_name})`;

  const safeValues = [first_name, last_name, 1234, true, 'full stack developer'];
  const sqlQuery = `INSERT INTO users(first_name, last_name, ssn, ninja_status, biography) VALUES( $1, $2, $3, $4, $5 )`;

  // add user to db
  client.query(sqlQuery, safeValues).then(result => {

    res.status(200).json(result);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Internal server error');
  });

}


// Get everything in the database
// Stretch goal ... do it with a where
function selectUsers(req, res) {
  const sqlQuery = `SELECT * FROM users`;
  // const sqlQuery = `SELECT * FROM users WHERE first=$1`;

  client.query(sqlQuery).then(result => {
    res.status(200).json(result.rows);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Internal server error');
  });
}

// Error Handler Routes
app.use('*', notFoundHandler);

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}

// Connect to DB and Start the Web Server
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to database:", client.connectionParameters.database) //show what database we connected to
    console.log('Server up on', PORT);
  });
})
