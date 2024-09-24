/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  generateCard();

  setInterval(generateCard, 10000);

  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", _ => {
    //location.reload();
    generateCard();
  });
};
