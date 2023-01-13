/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
});

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "stole my",
    "poop my",
    "bit my"
  ];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = [
    "on the street",
    "in my house",
    "in my drive way",
    "at my bathroom"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
