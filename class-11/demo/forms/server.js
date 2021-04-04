'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Express Middle ware
// Middleware is the request, response middle man 
app.use(express.urlencoded());
app.use(express.static('./public'));

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.sendFile('./thanks.html', { root: './public' });
});

app.get('/contact', (request, response) => {
  console.log(request.query);
  response.sendFile('./thanks.html', { root: './public' });
});

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
