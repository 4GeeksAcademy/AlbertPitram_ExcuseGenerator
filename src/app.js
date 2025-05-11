import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

const who = ['The dog', 'Ryan Reynolds', 'Balatro Balatrez', 'Juan de dios'];
const action = ['ate', 'gambled', 'sold', 'destroyed'];
const what = ['my homework', 'my phone', 'the car', 'the PC'];
const when = ['before the class', 'when I was playing Balatro', 'while I was gambling at the casino', 'while I was eating a Kebab', 'when I was learning how to speedrun Dark Souls'];


 function randomExcuse() {
      const randomWho = who[Math.floor(Math.random() * who.length)];
      const randomAction = action[Math.floor(Math.random() * action.length)];
      const randomWhat = what[Math.floor(Math.random() * what.length)];
      const randomWhen = when[Math.floor(Math.random() * when.length)];

      return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    }

   document.getElementById("excuse").textContent = randomExcuse();
   
};

