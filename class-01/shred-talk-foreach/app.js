"use strict";

const people = ["John", "Cathy", "Allie", "Zach"];

// for (let index = 0; index < people.length; index++) {
//   console.log(people[index]);
// }

people.forEach((element) => console.log(element));

const arrayOfGrades = [10, 5, 12, 9];

let total = 0;

arrayOfGrades.forEach((element) => {
  total = total + element;
  console.log(total);
});
