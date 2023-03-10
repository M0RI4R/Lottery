// Getting buttons from HTML
let btnLucky = document.querySelector(".toggle-input");
let btnRefreshNumb = document.querySelector(".changeNumbers");
let btnWriteNumb = document.querySelector(".writeNumbers");
let btnDeleteNumb = document.querySelector(".deleteNumbers");
let btnCheck = document.querySelector(".check-btn");
let btnPlay = document.querySelector(".play");
let btnPlayAgain = document.querySelector(".play-again");
// let btnPlayAgain = document.querySelector(".play-again-btn");

//Drown Numbers for lottery
let first = document.querySelector(".first-num");
let second = document.querySelector(".second-num");
let third = document.querySelector(".third-num");
let fourth = document.querySelector(".fourth-num");
let fifth = document.querySelector(".fifth-num");
let sixth = document.querySelector(".sixth-num");

// Inputs with bet numbers

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

// Hit or miss function
const hit = [one, two, three, four, five, six];
let newHit = [];

function hitOrMiss() {
  for (let i = 0; i < hit.length; i++) {
    if (btnLucky.checked) {
      let randomResult = Math.floor(Math.random() * 49 + 1);
      hit[i].value = randomResult;
      newHit.push(randomResult);
    } else {
      for (let i = 0; i < hit.length; i++) {
        hit[i].value = null;
        newHit.pop();
      }
    }
  }

  console.log(newHit);
}

// Refresh function if btnLucky ON
function refresh() {
  if (btnLucky.checked) {
    for (let i = 0; i < hit.length; i++) {
      newHit.pop();
    }
    for (let i = 0; i < hit.length; i++) {
      let randomResult = Math.floor(Math.random() * 49 + 1);
      hit[i].value = randomResult;
      newHit.push(randomResult);
    }
  }

  console.log(newHit);
}
//Delete user numbers

function del() {
  for (let i = 0; i < hit.length; i++) {
    hit[i].value = null;
  }
}
// Draw numbers
const drawnNum = [first, second, third, fourth, fifth, sixth];
const drawnNumbers = [];
function draw() {
  for (let i = 0; i < drawnNum.length; i++) {
    let randomResult = Math.floor(Math.random() * 49 + 1);
    drawnNum[i].textContent = randomResult;
    drawnNumbers.push(randomResult);
  }
  btnPlay.classList.toggle("display-none");
  btnPlayAgain.classList.toggle("display-active");

  console.log(drawnNumbers);
}
// Play Again
function playAgain() {}
//AddEventListener random numbers in bet

btnLucky.addEventListener("click", hitOrMiss);
btnRefreshNumb.addEventListener("click", refresh);
btnDeleteNumb.addEventListener("click", del);
btnCheck.addEventListener("click", draw);
btnCheck.addEventListener("click", playAgain);
