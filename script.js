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
    newHit.pop();
  }
  if (btnLucky.checked) {
    while (newHit.length < 6) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!newHit.includes(num)) {
        newHit.push(num);
        for (let i = 0; i < newHit.length; i++) {
          hit[i].value = newHit[i];
        }
      }
    }
  } else {
    for (let i = 0; i < hit.length; i++) {
      hit[i].value = null;
      newHit.pop();
    }
  }
  console.log(newHit);
  console.log(hit);
}

// Refresh function if btnLucky ON
function refresh() {
  if (btnLucky.checked) {
    for (let i = 0; i < hit.length; i++) {
      newHit.pop();
    }
    while (newHit.length < 6) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!newHit.includes(num)) {
        newHit.push(num);
        for (let i = 0; i < newHit.length; i++) {
          hit[i].value = newHit[i];
        }
      }
    }
  }

  console.log(newHit);
  console.log(hit);
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

function checkDuplicates(arr) {
  // Create an empty object to store each element and its count
  const counts = {};

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the element is not in the object, add it with a count of 1
    if (!counts[arr[i]]) {
      counts[arr[i]] = 1;
    }
    // If the element is already in the object, increment its count
    else {
      counts[arr[i]]++;
    }
  }

  // Check if any element has a count greater than 1 (indicating a duplicate)
  for (const element in counts) {
    if (counts[element] > 1) {
      return true; // Found a duplicate, return true
    }
  }

  // No duplicates found, return false
  return false;
}

// Draw numbers with button "Gram"
const drawnNum = [first, second, third, fourth, fifth, sixth];
const drawnNumbers = [];
let compareArray = [];
function draw() {
  emptyInput();

  console.log(confirm);
  for (let i = 0; i < hit.length; i++) {
    newHit[i] = hit[i].valueAsNumber;
  }
  console.log(checkDuplicates(newHit));
  if (confirm === false && checkDuplicates(newHit) === false) {
    while (drawnNumbers.length < 6) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!drawnNumbers.includes(num)) {
        drawnNumbers.push(num);
        for (let i = 0; i < newHit.length; i++) {
          drawnNum[i].textContent = drawnNumbers[i];
        }
      }
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
