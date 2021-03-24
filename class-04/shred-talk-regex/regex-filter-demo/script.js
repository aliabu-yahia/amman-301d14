"use strict";
const container = document.getElementById("main");

const userInput = prompt("Enter your chat message here!");

function renderChat(text) {
  const par = document.createElement("p");
  par.textContent = text;
  container.appendChild(par);
}

function checkForBadWords(userInput) {
  const matchBadWord = userInput.match(/\poo/g);
  console.log(matchBadWord);
  //   if (matchBadWord) {
  //     renderChat("please dont use any bad words");
  //   } else {
  //     renderChat(userInput);
  //   }
  let censored = "";
  if (matchBadWord) {
    for (let index = 0; index < matchBadWord[0].length; index++) {
      censored += "*";
    }

    const fixedWord = userInput.replace(matchBadWord, censored);
    renderChat(fixedWord);
  } else {
    renderChat(userInput);
  }
}

checkForBadWords(userInput);
