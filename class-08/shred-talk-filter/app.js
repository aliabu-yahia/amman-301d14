'use strict';

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// const even = numbers.map((n, i) => {
//     // return (n % 2);
//     if (!(n % 2)) {
//         return n;
//     }
// });


const even = numbers.filter((n, i) => {
    if (!(n % 2)) {
        return n;
    }
});

console.log(even);


let people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
];

const kids = people.filter(person => {
    return person.role === 'Kid';
});

const kidsMapped = people.map(person => {
    if (person.role === 'Kid') {
        return person;
    };
});

console.log(kids);
console.log(kidsMapped);