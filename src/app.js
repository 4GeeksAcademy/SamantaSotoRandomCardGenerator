/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { viewport } from "@popperjs/core";

window.onload = function() {
  //write your code here
  generateCard();

  // updateValue();

  setInterval(generateCard, 10000);

  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", _ => {
    generateCard();
  });
};

function generateCard() {
  let value = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];

  let suitCard = ["♦", "♥", "♠ ", "♣"];
  let randomValue = Math.floor(Math.random() * value.length);
  let randomSuitCard = Math.floor(Math.random() * suitCard.length);

  if (suitCard[randomSuitCard] == "♥" || suitCard[randomSuitCard] == "♦") {
    suiteTop.style.color = "red";
    suiteBottom.style.color = "red";
  } else {
    suiteTop.style.color = "black";
    suiteBottom.style.color = "black";
  }

  document.getElementById("value").innerHTML = value[randomValue];
  document.getElementById("suiteTop").innerHTML = suitCard[randomSuitCard];
  document.getElementById("suiteBottom").innerHTML = suitCard[randomSuitCard];
}

function handleInput(e) {
  const inputWidth = document.getElementById("inputWidth").value;
  if (inputWidth != null && inputWidth != 0) {
    document.getElementById("card").style.width = inputWidth + "vw";
  } else {
    document.getElementById("card").style.width = "29vw";
  }

  const inputHeight = document.getElementById("inputHeight").value;
  if (inputHeight != null && inputHeight != 0) {
    document.getElementById("card").style.height = inputHeight + "vw";
  } else {
    document.getElementById("card").style.height = "40vw";
  }
}
document.getElementById("inputWidth").addEventListener("blur", handleInput);
document.getElementById("inputHeight").addEventListener("blur", handleInput);
