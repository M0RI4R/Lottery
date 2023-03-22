// Getting buttons from HTML
let btnLucky = document.querySelector(".toggle-input");
let btnRefreshNumb = document.querySelector(".changeNumbers");
let btnWriteNumb = document.querySelector(".writeNumbers");
let btnDeleteNumb = document.querySelector(".deleteNumbers");
let btnCheck = document.querySelector(".check-btn");
let btnPlayAgain = document.querySelector(".play-again-btn");
let btnCloseForm = document.querySelector(".close-form");
let btnSave = document.querySelector(".save-btn");
let numberButton = document.querySelectorAll(".number-button");

// Selection type of the game 6 or 7 or 8 or 9 or 10 numbers
let select = document.querySelector("select");

// POPUPS
let description = document.querySelector(".description");
let ulList = document.querySelector(".winning-numbers");
let alert = document.querySelector(".alert");
let hitNumbers = document.querySelector(".hit-numbers");
let writeNewNumbers = document.querySelector(".modal-content");
let picker = document.querySelector(".picker");
let index; // index of first NULL value in hitPopup array
let alertPopup = document.querySelector(".all-numbers-popup");

//Drown Numbers for lottery

let first = document.querySelector(".first-num");
let second = document.querySelector(".second-num");
let third = document.querySelector(".third-num");
let fourth = document.querySelector(".fourth-num");
let fifth = document.querySelector(".fifth-num");
let sixth = document.querySelector(".sixth-num");

// Inputs with bet numbers

let one = document.querySelectorAll(".one");
let two = document.querySelectorAll(".two");
let three = document.querySelectorAll(".three");
let four = document.querySelectorAll(".four");
let five = document.querySelectorAll(".five");
let six = document.querySelectorAll(".six");
let seven = document.querySelectorAll(".seven");
let eight = document.querySelectorAll(".eight");
let nine = document.querySelectorAll(".nine");
let ten = document.querySelectorAll(".ten");

//Arrays to work with
let hit = [one[0], two[0], three[0], four[0], five[0], six[0]];
let hitPopup = [one[1], two[1], three[1], four[1], five[1], six[1]];
let newHit = [];

// Hit or miss function
function hitOrMiss() {
  for (let i = 0; i < hit.length; i++) {
    newHit.pop();
  }
  if (btnLucky.checked) {
    btnRefreshNumb.classList.toggle("display-active");
    while (newHit.length < hit.length) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!newHit.includes(num)) {
        newHit.push(num);
        for (let i = 0; i < newHit.length; i++) {
          hit[i].value = newHit[i];
        }
      }
    }
  } else {
    btnRefreshNumb.classList.toggle("display-active");
    for (let i = 0; i < hit.length; i++) {
      hit[i].value = null;
      newHit.pop();
    }
  }
  console.log(hit);
}

// Refresh function if btnLucky ON
function refresh() {
  if (btnLucky.checked) {
    for (let i = 0; i < hit.length; i++) {
      newHit.pop();
    }
    while (newHit.length < hit.length) {
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
  picker.classList.remove("button-border");
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
  for (let i = 0; i < hit.length; i++) {
    newHit[i] = hit[i].valueAsNumber;
  }
  if (confirm === false && checkDuplicates(newHit) === false) {
    // Disable interaction after click button "Gram"
    btnRefreshNumb.disabled = true;
    btnWriteNumb.disabled = true;
    btnDeleteNumb.disabled = true;
    select.disabled = true;
    btnLucky.disabled = true;
    while (drawnNumbers.length < 6) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!drawnNumbers.includes(num)) {
        drawnNumbers.push(num);
        for (let i = 0; i < drawnNum.length; i++) {
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

  //Enable interaction after click button "Zagraj ponownie"
  btnRefreshNumb.disabled = false;
  btnWriteNumb.disabled = false;
  btnDeleteNumb.disabled = false;
  select.disabled = false;
  btnLucky.disabled = false;

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

// Add extra slots for numbers in bet

function addInputToHit() {
  if (select.value == "Bez systemu") {
    hit.length = 6;
    newHit.length = 6;
    hitPopup.length = 6;
    hit = [one[0].value, two[0], three[0], four[0], five[0], six[0]];
    hitPopup = [one[1], two[1], three[1], four[1], five[1], six[1]];
    console.log(hit);
    console.log(newHit);
    seven[0].classList.remove("display-active");
    eight[0].classList.remove("display-active");
    nine[0].classList.remove("display-active");
    ten[0].classList.remove("display-active");
    seven[1].classList.remove("display-active");
    eight[1].classList.remove("display-active");
    nine[1].classList.remove("display-active");
    ten[1].classList.remove("display-active");
  } else if (select.value == "7 liczb(7 zakładów prostych)") {
    hit.length = 7;
    newHit.length = 7;
    hitPopup.length = 7;
    hit = [one[0], two[0], three[0], four[0], five[0], six[0], seven[0]];
    hitPopup = [one[1], two[1], three[1], four[1], five[1], six[1], seven[1]];
    seven[0].classList.add("display-active");
    eight[0].classList.remove("display-active");
    nine[0].classList.remove("display-active");
    ten[0].classList.remove("display-active");
    seven[1].classList.add("display-active");
    eight[1].classList.remove("display-active");
    nine[1].classList.remove("display-active");
    ten[1].classList.remove("display-active");
    console.log(hit);
    console.log(newHit);
  } else if (select.value == "8 liczb(28 zakładów prostych)") {
    hit.length = 8;
    newHit.length = 8;
    hit = [
      one[0],
      two[0],
      three[0],
      four[0],
      five[0],
      six[0],
      seven[0],
      eight[0],
    ];
    hitPopup = [
      one[1],
      two[1],
      three[1],
      four[1],
      five[1],
      six[1],
      seven[1],
      eight[1],
    ];
    console.log(hit);
    console.log(newHit);
    eight[0].classList.add("display-active");
    seven[0].classList.add("display-active");
    nine[0].classList.remove("display-active");
    ten[0].classList.remove("display-active");
    eight[1].classList.add("display-active");
    seven[1].classList.add("display-active");
    nine[1].classList.remove("display-active");
    ten[1].classList.remove("display-active");
  } else if (select.value == "9 liczb(84 zakłady proste)") {
    hit.length = 9;
    newHit.length = 9;
    hit = [
      one[0],
      two[0],
      three[0],
      four[0],
      five[0],
      six[0],
      seven[0],
      eight[0],
      nine[0],
    ];
    hitPopup = [
      one[1],
      two[1],
      three[1],
      four[1],
      five[1],
      six[1],
      seven[1],
      eight[1],
      nine[1],
    ];
    console.log(hit);
    console.log(newHit);
    seven[0].classList.add("display-active");
    eight[0].classList.add("display-active");
    nine[0].classList.add("display-active");
    ten[0].classList.remove("display-active");
    seven[1].classList.add("display-active");
    eight[1].classList.add("display-active");
    nine[1].classList.add("display-active");
    ten[1].classList.remove("display-active");
  } else if (select.value == "10 liczb(210 zakładów prostych)") {
    hit.length = 10;
    newHit.length = 10;
    hit = [
      one[0],
      two[0],
      three[0],
      four[0],
      five[0],
      six[0],
      seven[0],
      eight[0],
      nine[0],
      ten[0],
    ];
    hitPopup = [
      one[1],
      two[1],
      three[1],
      four[1],
      five[1],
      six[1],
      seven[1],
      eight[1],
      nine[1],
      ten[1],
    ];
    console.log(hit);
    console.log(newHit);
    seven[0].classList.add("display-active");
    eight[0].classList.add("display-active");
    nine[0].classList.add("display-active");
    ten[0].classList.add("display-active");
    seven[1].classList.add("display-active");
    eight[1].classList.add("display-active");
    nine[1].classList.add("display-active");
    ten[1].classList.add("display-active");
  }
}

// Show popup with array of numbers to select numbers
const writeNumbers = () => {
  writeNewNumbers.classList.toggle("display-none");
  for (let i = 0; i < hit.length; i++) {
    hitPopup[i].value = hit[i].value;
    newHit[i] = parseInt(hit[i].value);
  }

  if (newHit.includes(NaN)) {
    alertPopup.textContent = "Podaj wszystkie liczby";
  } else {
    alertPopup.textContent = "";
  }
  numberButton.forEach((button) => {
    const value = parseInt(button.value);
    if (newHit.includes(value)) {
      button.classList.add("button-border");
    }
  });

  console.log(hitPopup);
  console.log(newHit);
  console.log(hit);
};

// Close popup with array of numbers. Don't save changes
const closeForm = () => {
  writeNewNumbers.classList.toggle("display-none");
  numberButton.forEach((button) => {
    const value = parseInt(button.value);
    if (newHit.includes(value)) {
      button.classList.remove("button-border");
    }
  });
};

// Close popup with array of numbers. Save changes
const saveChanges = () => {
  writeNewNumbers.classList.toggle("display-none");
  for (let i = 0; i < hitPopup.length; i++) {
    hit[i].value = hitPopup[i].value;
    newHit[i] = parseInt(hit[i].value);
  }

  numberButton.forEach((button) => {
    const value = parseInt(button.value);
    if (newHit.includes(value)) {
      button.classList.remove("button-border");
    }
  });
  console.log(hitPopup);
  console.log(newHit);
  console.log(hit);
};

// Check with button was clicked and add value to user numbers
// function hasDuplicates(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return true; // Found a duplicate
//       }
//     }
//   }
//   return false; // No duplicates found
// }

const checkClick = (e) => {
  for (let i = 0; i < hitPopup.length; i++) {
    if (
      hitPopup[i].value === "" &&
      !e.target.classList.contains("button-border")
    ) {
      hitPopup[i].value = e.target.value;
      e.target.classList.toggle("button-border");
      console.log(i);
      console.log(e.target.value);
      return;
    } else if (e.target.value === hitPopup[i].value) {
      hitPopup[i].value = null;
      e.target.classList.toggle("button-border");
      alertPopup.textContent = "";
      return;
    }
  }
};

// Animated Balls in background

const ballImages = [
  "images/ball.png",
  "images/1.png",
  "images/25.png",
  "images/10.png",
  "images/32.png",
  "images/48.png",
];

function renderBallsConteiner() {
  const ballsConteiner = document.createElement("div");
  ballsConteiner.classList = "balls";
  document.body.appendChild(ballsConteiner);
  return ballsConteiner;
}

function renderBall(ballsConteiner) {
  const ball = document.createElement("div");
  ball.classList = "ball-one";
  ballsConteiner.appendChild(ball);

  const img = document.createElement("img");
  img.src = ballImages[Math.floor(Math.random() * ballImages.length)];
  img.style.top = `${Math.random() * 100}%`;
  ball.appendChild(img);
  ballsConteiner.appendChild(ball);
  setTimeout(renderBall, 2000, ballsConteiner);
}

const ball = renderBallsConteiner();
renderBall(ball);

//AddEventListeners

btnLucky.addEventListener("click", hitOrMiss);
btnRefreshNumb.addEventListener("click", refresh);
btnWriteNumb.addEventListener("click", writeNumbers);
btnCloseForm.addEventListener("click", closeForm);
btnSave.addEventListener("click", saveChanges);
btnDeleteNumb.addEventListener("click", del);
btnCheck.addEventListener("click", draw);
btnPlayAgain.addEventListener("click", playAgain);
select.addEventListener("change", addInputToHit);
picker.addEventListener("click", checkClick);
