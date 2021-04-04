"use strict";
let str = "the rain in spain falls mainly in the plain";
// let regex = /[A-Z]/g;
// let regex = /[a-z]/g;
// let regex = /[a-d]/g;
// console.log(str.match(regex));

// let wordSeparators = /\W/g;
// let wordSeparators = /\w/g;

// console.log(str.match(wordSeparators));

let email = "john@here.com";
let myEmail = "t.hamoudi@ltuc.com";
let bogusEmail = "myAcc01@gmail.com";
let validator = /(.*?)@(.*?)\.(com|net|org)/g;
let ltucValidator = /(.*?)@(ltuc*?)\.(com|net|org)/g;
let bogusValidator = /([a-z])@(.*?)\.(com|net|org)/g;
console.log(validator.test(email));
// console.log(email.match(validator));
// console.log(myEmail.match(ltucValidator));
// console.log(email.match(ltucValidator));
// console.log(bogusEmail.match(validator));
// console.log(email.match(bogusValidator));
console.log(bogusEmail.match(bogusValidator));
console.log(bogusValidator.test(bogusEmail));
