"use strict";

const arrOfNum = [2, 3, 7, 1, 4, 5];
arrOfNum.sort();
console.log(arrOfNum);

// sorts by ASCII Code
const arrOfNames = ["Obada", "doha", "Ali Baker", "Manar"];
arrOfNames.sort();
console.log(arrOfNames);
// If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
const arrOfLargeNum = [12, 100, 11, 13, 200];
arrOfLargeNum.sort();
console.log(arrOfLargeNum);

/*
If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
 */

arrOfLargeNum.sort(compareFunction);

function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }

  if (b < a) {
    return 1;
  }

  return 0;
}
console.log(arrOfLargeNum);

const peopleObj = [
  { name: "batool", position: "TA" },
  { name: "Aseel", position: "student" },
  { name: "Hidaya", position: "ta" },
  { name: "ali baker", position: "student" },
  { name: "Roquia", position: "TA" },
  { name: "Naeem", position: "student" },
];

peopleObj.sort((a, b) => {
  if (a.position.toLowerCase() === b.position.toLowerCase()) {
    return 0;
  }
  if (a.position.toLowerCase() === "ta") {
    return -1;
  }
});
console.log(peopleObj);
