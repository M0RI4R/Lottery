// Getting buttons from HTML
let btnLucky = document.querySelector(".toggle-input");
let btnRefreshNumb = document.querySelector(".changeNumbers");
let btnWriteNumb = document.querySelector(".writeNumbers");
let btnDeleteNumb = document.querySelector(".deleteNumbers");
let btnCheck = document.querySelector(".check-btn");
let btnPlayAgain = document.querySelector(".play-again-btn");

// POPUPS
let description = document.querySelector(".description");
let ulList = document.querySelector(".winning-numbers");
let alert = document.querySelector(".alert");
let hitNumbers = document.querySelector(".hit-numbers");

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
const newHit = [];

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

//Checking if all user numbers imputs has a value and it's from 1 to 49
let confirm;
function emptyInput() {
  if (
    hit.some((e) => e.value == "") ||
    hit.some((e) => e.value > 49) ||
    hit.some((e) => e.value < 1)
  ) {
    confirm = true;
  } else {
    confirm = false;
  }
}

// Draw numbers with button "Gram"
const drawnNum = [first, second, third, fourth, fifth, sixth];
const drawnNumbers = [];
let compareArray = [];
function draw() {
  emptyInput();
  console.log(confirm);
  if (confirm == false) {
    for (let i = 0; i < drawnNum.length; i++) {
      let randomResult = Math.floor(Math.random() * 49 + 1);
      drawnNum[i].textContent = randomResult;
      if (drawnNum.includes(randomResult)) {
        console.log(drawnNum);
        drawnNum.pop();
        return draw();
      }
      drawnNumbers.push(randomResult);
    }

    // Comparing two arrays, user chosen number and drawn numbers
    compareArray = newHit.filter((e) => drawnNumbers.includes(e));

    //
    btnCheck.classList.remove("display-active");
    btnCheck.classList.toggle("display-none");
    btnPlayAgain.classList.remove("display-none");
    btnPlayAgain.classList.toggle("display-active");
    description.classList.toggle("display-none");
    ulList.classList.toggle("display-flex");
    hitNumbers.classList.toggle("display-active");
    hitNumbers.textContent = `Trafiłeś ${compareArray.length} liczby`;
    alert.textContent = "";
    console.log(drawnNumbers);
    console.log(newHit);
    console.log(compareArray);
  } else {
    alert.textContent = "Podaj wszystkie liczby z przedziału 1-49";
  }
}

// Play Again with button "Zagraj ponownie"
function playAgain() {
  for (let i = 0; i < drawnNum.length; i++) {
    drawnNum[i].textContent = null;
    drawnNumbers.pop();
  }
  console.log(drawnNumbers);
  hitNumbers.textContent = "";
  hitNumbers.classList.toggle("display-active");
  btnCheck.classList.remove("display-none");
  btnCheck.classList.toggle("display-active");
  btnPlayAgain.classList.remove("display-active");
  btnPlayAgain.classList.toggle("display-none");
  description.classList.toggle("display-none");
  ulList.classList.toggle("display-flex");
}
//AddEventListeners

btnLucky.addEventListener("click", hitOrMiss);
btnRefreshNumb.addEventListener("click", refresh);
btnDeleteNumb.addEventListener("click", del);
btnCheck.addEventListener("click", draw);
btnPlayAgain.addEventListener("click", playAgain);
