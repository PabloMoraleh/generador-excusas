/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/windows.ico";

window.onload = () => {
  document.querySelector("#la-excusa").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi pajaro"];
  let action = ["se comió", "orinó en", "aplastó", "rompió"];
  let what = ["mi tarea", "las llaves", "el coche"];
  let when = [
    "antes de clases",
    "justo a tiempo",
    "cuando acabé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
