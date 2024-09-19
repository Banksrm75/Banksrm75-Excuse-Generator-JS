/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // arrays of parts of the sentence
  let firstWord = "A";
  let adj = ["lonely", "angry", "slow", "old", "two-headed"];
  let subject = ["jogger", "dog", "racoon", "grandma", "alien", "merchant"];
  let action = [
    "kicked my",
    "hid my",
    "ate my",
    "demolished my",
    "threw my",
    "burned my"
  ];
  let possession = [
    "computer",
    "car",
    "phone",
    "cat",
    "cactus",
    "luggage",
    "toothbrush",
    "sandwich"
  ];
  let location = [
    "in the house!",
    "on the lawn!",
    "at school!",
    "at work!",
    "in the parking lot!",
    "in the backyard!"
  ];

  // random selection of elements using Math.floor() and Math.random()
  let random1 = getRandomIndex(adj);
  let random2 = getRandomIndex(subject);
  let random3 = getRandomIndex(action);
  let random4 = getRandomIndex(possession);
  let random5 = getRandomIndex(location);

  document.querySelector(".excuse").innerHTML =
    firstWord +
    " " +
    adj[random1] +
    " " +
    subject[random2] +
    " " +
    action[random3] +
    " " +
    possession[random4] +
    " " +
    location[random5];

  // create a function that will be called to generate a random number to be used in selecting an element in each array
  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }
};
