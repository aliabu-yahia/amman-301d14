'use strict';

// Application Dependencies
require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const pg = require('pg');

// Application Setup
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;
const app = express();
// Database Connection Setup
const client = new pg.Client(DATABASE_URL);

// Route Definitions
app.get('/location', locationHandler);
app.use('*', notFoundHandler);


function locationHandler(request, response) {
    const city = request.query.city;

    const safeValues = [city];
    const sqlQuery = 'SELECT * FROM locations WHERE search_query=$1';

    client.query(sqlQuery, safeValues).then(dbData => {
        if (dbData.rows.length !== 0) {
            // throw error;
            response.json(dbData.rows[0]);
        } else {
            const url = 'https://us1.locationiq.com/v1/search.php';

            const queryParams = {
                key: GEOCODE_API_KEY,
                q: city,
                format: 'json',
            };
            superagent.get(url)
                .query(queryParams)
                .then(data => {
                    const geoData = data.body[0]; // first one ...
                    const location = new Location(city, geoData);

                    // store in the DB
                    const safeValues = [
                        location.search_query,
                        location.formatted_query,
                        location.latitude,
                        location.longitude
                    ];

                    const sqlQuery = 'INSERT INTO locations(search_query,formatted_query,latitude,longitude) VALUES($1, $2,$3,$4)'
                    client.query(sqlQuery, safeValues);

                    response.send(location);
                })
                .catch((error) => {
                    console.log('ERROR', error);
                    response.status(500).send('So sorry, something went wrong.');
                });
        }
    });
}

function Location(city, geoData) {
    this.search_query = city;
    this.formatted_query = geoData.display_name;
    this.latitude = geoData.lat;
    this.longitude = geoData.lon;
}


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
