'use strict';

const Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.getName = function () { return this.name; };

let person = new Person('Fred', 51);

// bad code -- references the same thing over and over
function sayName(person) {
    if (person.age >= 50) {
        return person.getName().toUpperCase();
    } else {
        return person.getName().toLowerCase();
    }
}

// console.log(sayName(person));

// better -- cache a reference to it, just once
function sayNameBetter(person) {

    const personsAge = person.age;
    const personsName = person.getName();

    if (personsAge >= 50) {
        return personsName.toUpperCase();
    } else {
        return personsName.toLowerCase();
    }
}

// console.log(sayNameBetter(person));

// even better -- use a ternary
function sayNameEvenBetter(person) {
    const personsAge = person.age;
    const personsName = person.getName();
    return personsAge >= 50 ? personsName.toUpperCase() : personsName.toLowerCase();

}

// console.log(sayNameEvenBetter(person));







// Promises - Ugly
function doSomethingAsync(person) {
    return Promise.resolve(person);
}

doSomethingAsync(person).then(data => {
    data.name = data.name.toUpperCase();
    console.log('ugly upper', data.name);
    return data;
}).then(differentData => {
    differentData.name = differentData.name.toLowerCase();
    console.log('ugly lower', differentData.name);
});


// Promises Better

doSomethingAsync(person)
    .then(data => changeNameToUpperCase(data.name))
    .then(name => printTheName(name))
    .then(name => changeNameToLowerCase(name))
    .then(name => printTheName(name));

function changeNameToUpperCase(name) {
    return name.toUpperCase();

}

function changeNameToLowerCase(name) {
    return name.toLowerCase();
}

function printTheName(name) {
    console.log(name);
    return name;
}