"use strict";
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8];

// --- PUSH --- Adds a number of elements to the end of the array
// arrOfNum.push(10);
// arrOfNum.push(11, 12, 13, 14);
// console.log(arrOfNum);

// --- POP ---  Removes an element from the end of the array
// arrOfNum.pop();
// console.log(arrOfNum);

// ---UNSHIFT --- Add a number of elements to the beginning of the array
// arrOfNum.unshift(0);
// arrOfNum.unshift(-3, -2, -1);
// console.log(arrOfNum);

// ---  SHIFT --- Remove an element from the beginning of the array
// arrOfNum.shift();
// console.log(arrOfNum);

// --- TOSTRING ---
// const stringifiedArr = arrOfNum.toString();
// console.log(stringifiedArr);

// --- JOIN ---
// const joinedArr = arrOfNum.join(" ");
// const joinedArr = arrOfNum.join("-");
// console.log(joinedArr);

// --- SPLIT --- Split turns a string into an array of substrings using a separator

// const factCheck = "Cats are furniture worst Enemy";
// const factCheck = "cats are furniture worst Enemy";
// const factCheck = "CatsarefurnitureworstEnemy";
// const arrayOfWords = factCheck.split("E");
// const arrayOfWords = factCheck.split("c", 1);
// const arrayOfWords = factCheck.split("e");
// const arrayOfWords = factCheck.split("e", 2);
// console.log(arrayOfWords);

// const myEmail = "t.hamoudi@ltuc.com";
// const name = myEmail.split("@", 1)[0];
// console.log(name);

// --- SLICE ---
// Does not alter the array
// const slicedPizza = arrOfNum.slice(0, 2);
// const slicedPizza = arrOfNum.slice(2, 4);
// const slicedPizza = arrOfNum.slice(4, 5);
// const slicedLastSlice = arrOfNum.slice(7);
// const slicedLastSlice = arrOfNum.slice(-1);
// const clonedArrOfNumbers = arrOfNum.slice();
// console.log(slicedPizza);
// console.log(slicedLastSlice);

// ---SPLICE ---
// Alters the array

// const deletedNum = arrOfNum.splice(0, 1);
// const deletedNum = arrOfNum.splice(0, 2);
// const deletedNum = arrOfNum.splice(4, 2);
// console.log(deletedNum);
// console.log(arrOfNum);

// replacing or Adding an element
// const replaced = arrOfNum.splice(0, 1, 15);
// const replacedFromTheMiddle = arrOfNum.splice(4, 2, 8);
// const replacedFromTheMiddle = arrOfNum.splice(4, 2, "8", 8, 12);
// console.log(replacedFromTheMiddle);
// console.log(arrOfNum);

// CONCAT
// const arrAyOne = [1, 2, 3];
// const arrAyTwo = [4, 5, 6];
// const arrAyThree = [7, 8, 9];
// const newArr = arrAyOne.concat(arrAyTwo, arrAyThree);
// console.log(newArr);
