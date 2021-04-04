"use strict";

// the old way
// target the element
// document.getElementById("btn").addEventListener("click", (event) => {
//   // get the ul element
//   const ul = document.getElementById("myList");
//   // try to check the visibility style if its hidden
//   // if its hidden show it
//   // if its shown hide it
//   ul.classList.toggle("on");
// });

// The jQuery Way
$("document").ready(function () {
  $("#btn").on("click", () => $("ul").toggleClass("on"));

  // create a second event listener using jQuery to fadeout the list of items when i click on them

  $("li").on("click", function () {
    $(this).fadeOut(400);
  });
});
