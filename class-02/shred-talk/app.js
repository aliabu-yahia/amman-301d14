"use strict";

let myAge = 28; //
let yourAge = myAge; //
console.log(myAge);
console.log(yourAge);
yourAge = 27;
console.log(myAge);
console.log(yourAge);

let car1 = {
  name: "audi",
  model: "a6",
};

let car2 = car1;
console.log(car1);
console.log(car2);
car2.name = "Honda";
car2.model = "crv";
console.log(car1);
console.log(car2);

// to make a copy of an object and assign it by value we use Object.assign

let car3 = Object.assign({}, car2);
console.log("------------------------------");
console.log(car1);
console.log(car2);
console.log(car3);
car3.name = "toyota";
car3.model = "camry";
console.log(car1);
console.log(car2);
console.log(car3);
