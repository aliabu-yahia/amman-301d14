'use strict';

const hours = ['7am', '8am', '9am'];
const helper = require('./../helper.js');

function Store(location, min, max, avg) {
    this.location = location;
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.avgPizzasPerCustomer = avg;
    this.projections = {};
    this.projectSales();

    Store.stores.push(this);
};

Store.stores = [];

Store.prototype.projectSales = function () {
    hours.forEach((hour) => {
        this.projections[hour] = helper.randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgPizzasPerCustomer;
    });
};


module.exports = Store;