/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let soyperra = document.getElementById("soyperra");
  soyperra.innerText = random();
  // console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function random() {
  let aleatorio = Math.floor(Math.random() * when.length);
  let aleatorioDos = Math.floor(Math.random() * action.length);
  let aleatorioTres = Math.floor(Math.random() * who.length);
  let aleatorioCuatro = Math.floor(Math.random() * what.length);

  let cadena = `${who[aleatorioTres]} ${action[aleatorioDos]} ${when[aleatorio]} ${what[aleatorioCuatro]}`;
  return cadena;
}
