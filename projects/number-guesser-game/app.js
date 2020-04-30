// game values & reflection on the dom

const min = 1;
const max = 5;
const tries = 3;

document.getElementById("start-num").textContent = min;
document.getElementById("end-num").textContent = max;

// select dom elements

const submit = document.getElementById("submit");
const input = document.getElementById("input");
let statusText = document.getElementById("status-text");

// functions

function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * max + min);
  // return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkIfWon() {
  return randomNum === parseInt(input.value);
}

function checkIfValidInput(input) {
  if (isNaN(input) || input > max || input < min) {
    return false;
  }
  return true;
}

function statusUpdate(message, color) {
  statusText.textContent = message;
  input.style.borderColor = color;
  statusText.style.color = color;
}

function restartGame() {
  let restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Game";
  restartBtn.className += "button-primary restart";
  document.querySelector(".game").appendChild(restartBtn);
}

function disablefields() {
  input.disabled = true;
  submit.disabled = true;
  submit.className = "button";
}

// game

let triesLeft = tries;
let randomNum = randomNumGenerator(min, max);
statusText.textContent = `You have ${tries} tries. Good Luck!`;
let msg = "";

submit.addEventListener("click", () => {
  let value = parseInt(input.value);

  if (!checkIfValidInput(value)) {
    msg = "Please enter a valid number";
    statusUpdate(msg, "orange");
  } else {
    if (checkIfWon()) {
      msg = "You won!";
      statusUpdate(msg, "green");
      disablefields();
      restartGame();
    } else {
      input.value = "";
      triesLeft--;
      msg = `You have ${triesLeft} tries left.`;
      statusUpdate(msg, "orange");
    }

    if (triesLeft === 0) {
      msg = `You lost. The correct number was ${randomNum}`;
      statusUpdate(msg, "red");
      input.removeAttribute("placeholder");
      disablefields();
      restartGame();
    }
  }
});

document.querySelector(".game").addEventListener("click", (e) => {
  if (e.target.className.includes("restart")) {
    window.location.reload();
  }
});

// todo: replacesubmit with play again btn or position the restart btn next to submit btn, use mousedown
