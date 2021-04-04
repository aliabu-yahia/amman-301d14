'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT;
const GEO_CODE_API_KEY = process.env.GEO_CODE_API_KEY;
const app = express();
app.use(cors());

// Route Definitions
app.get('/location', locationHandler);
app.get('/restaurants', restaurantHandler);
app.get('/places', placesHandler);
app.use('*', notFoundHandler);

function locationHandler(request, response) {
  const city = request.query.city;
  // console.log(request.query);
  // const url = `https://us1.locationiq.com/v1/search.php?key=${GEO_CODE_API_KEY}&q=${city}&format=json`;
  // const url = `https://us1.locationiq.com/v1/search.php?key=${GEO_CODE_API_KEY}&city=${city}&format=json`;
  const url = 'https://us1.locationiq.com/v1/search.php';

  const cityQueryParam = {
    key: GEO_CODE_API_KEY,
    city: city,
    format: 'json'
  };

  // console.log(cityQueryParam);

  if (!city) {
    response.status(404).send('no search query was provided');
  }

  superagent.get(url).query(cityQueryParam).then(resData => {

    // console.log(resData.body[0]);
    const location = new Location(city, resData.body[0])
    response.status(200).send(location);
  }).catch((error) => {
    console.log('ERROR', error);
    response.status(500).send('Sorry, something went wrong');
  });

}

function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.display_name;
  this.latitude = geoData.lat;
  this.longitude = geoData.lon;
}


function restaurantHandler(request, response) {



}

function Restaurant(entry) {
  this.restaurant = entry.restaurant.name;
  this.cuisines = entry.restaurant.cuisines;
  this.locality = entry.restaurant.location.locality;
}

function placesHandler(request, response) {

}

function Place(data) {
  this.name = data.text;
  this.type = data.properties.category;
  this.address = data.place_name;
}


function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
