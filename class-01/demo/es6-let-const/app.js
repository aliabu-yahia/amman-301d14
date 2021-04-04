"use strict";

// var x = 10;
// let y = 20;

// function example() {
//   var localscope = 112;
//   console.log();
// }

// console.log(x);
// console.log(y);

////// block scope (let and const) vs function scoped (var)
if (true) {
  var varDeclared = "my var declared var";
}

console.log(varDeclared);

if (true) {
  let x = "My let declared var";
  //   console.log(x);
}

// console.log(x);

////// re-declaring  variables
var testVar = 15;
console.log(testVar);

var testVar = 20;

console.log(testVar);

let testLetVar = 30;

console.log(testLetVar);

testLetVar = "hello Bob"; // reassign the variable value

function scopedFuncExample() {
  let testLetVar = "my scoped testLetVar";
  console.log(testLetVar);
}

scopedFuncExample();

console.log(testLetVar);

//// const

const pie = 3.14;

console.log(pie);

// pie = "this is a tasty apple pie";
// console.log(pie);

const mishmish = {
  name: "mishmish",
  age: 4,
  type: "orange tabby",
};

mishmish.age = 5;
console.log(mishmish);

//// undefined var
var tree;
console.log(tree);

let plant;
console.log(plant);

// const flower;
// console.log(flower);

// console.log(varNotNamed);
// let varNotNamed = "now declared";
