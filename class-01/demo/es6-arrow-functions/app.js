"use strict";

// normal es5 way
// document.getElementById("btn").addEventListener("click", function (event) {
//   alert("hello user!");
// });

// es6 arrow function
document
  .getElementById("btn")
  .addEventListener("click", (event) => alert("hello user!"));

// es5 function
// function randomNumMinMax(min, max) {
//   return Math.round(Math.random() * (max - min + 1) + min);
// }

// es6 arrow function
const randomNumMinMax = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

const randomNumber = randomNumMinMax(2, 7);
console.log(randomNumber);
