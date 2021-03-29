'use strict';
const numbers = [2, 3, 4, 5];
const nums = [1, 2, 3, 4, 5, 6, 7];

// numbers.forEach(element => {
//     console.log(element);
// });

// numbers.map(number => {
//     console.log(number);
// });


// const clonedNumberArr = numbers.map(number => {
//     return number;
// });

// console.log(clonedNumberArr);


// output [2,4,5,6,7,8,9]
// const arrayOfNumAddedOne = nums.map((number, index) => {
//     console.log(index);
//     return number + 1;
// });
// console.log(nums);
// console.log(arrayOfNumAddedOne);

// const people = [
//     { name: "John", role: "Dad" },
//     { name: "Cathy", role: "Mom" },
//     { name: "Zach", role: "Kid" },
//     { name: "Allie", role: "Kid" },
// ];

// const arrOfName = people.map(person => {
//     console.log(person);
//     return person.name;
// });

// console.log(arrOfName);

const arrayOfNumsModified = nums.map((num, idx) => {
    if (nums[idx + 1]) {
        return num + nums[idx + 1];
    } else {
        return '';
    }
});

console.log(arrayOfNumsModified);