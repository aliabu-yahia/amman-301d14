'use strict';
const numbers = [1, 2, 3, 4];

// let sum = 0;
// numbers.forEach(number => {
//     sum += number;
// });

// console.log(sum);

// let sum = numbers.reduce((accumulator, value, idx) => {
//     console.log(`We are at loop # ${idx}`);
//     console.log(accumulator);
//     console.log(value);
//     return accumulator += value
// }, 5);

// console.log(sum);

let people = [
    { name: 'Fred', role: 'Developer' },
    { name: 'Suzy', role: 'Developer' },
    { name: 'Gina', role: 'Manager' },
    { name: 'Jim', role: 'Support' }
];

let detailedPeople = people.reduce((accumulator, value) => {
    accumulator[value.name] = value.role;
    return accumulator;
}, {});


console.log(detailedPeople);

