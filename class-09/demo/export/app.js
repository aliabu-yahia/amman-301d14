'use strict';

const store = require('./Models/Store.js');
const helper = require('./helper');

const pizza = new store('Pizza Place', 5, 10, 2.5);

console.log(helper.welcomeMessage());
console.log(pizza);