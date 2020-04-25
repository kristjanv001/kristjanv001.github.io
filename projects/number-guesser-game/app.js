/* ----------------------------------------
|
|
| RULES
|
|
---------------------------------------- */

/* 
- player gets a certain amount of guesses
- player has to see how many guesses are remaining
- notify the player of the correct answer or if incorrect
- let the player choose to play again
- the player can't enter any more numbers if game over

Min and max nums in HTML - so that we can change the numbers only in one place - in JS. Otherwise we'd have to change the numbers both in HTML and in JS.

Whatever we have specified in the JS, should appear in the HTML. 

We need to make sure that the input field is not blank; is not less or more than the minimum and that it is a number.
*/

/* ----------------------------------------
|
|
| CODE
|
|
---------------------------------------- */

// Game values
let min = 1,
  max = 5,
  randomNumber = Math.floor(Math.random() * max) + min,
  guessesLeft = 3;

// UI elements
const gameUI = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  restartBtn = document.querySelector("#restart-btn"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Event listener for the guess button
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  console.log(guess);

  // Validate our input
  if (guess > max || guess < min || isNaN(guess)) {
    setMessage(`Please enter a number between ${min} and ${max}`, "tomato");
  }

  // Game over - won
  else if (guess === randomNumber) {
    // Disable the input and the button
    guessInput.disabled = true;
    guessBtn.disabled = true;
    // Change border
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${randomNumber} is correct! You won!`, "green");
  } else {
    guessesLeft -= 1;
    // Game over - lost
    if (guessesLeft === 0) {
      // Disable the input and the button
      guessInput.disabled = true;
      guessBtn.disabled = true;
      // Set message
      setMessage(`${randomNumber} was the correct number. Better luck next time!`, "tomato");
    } else {
      // Wrong answer, game continues
      // Clear input
      guessInput.value = "";
      // Change border
      guessInput.style.borderColor = "tomato";
      // Set message
      setMessage(`${guess} was not the correct number. Tries left: ${guessesLeft}`, "tomato");

    }
  }
});


// Restart event listener
restartBtn.addEventListener("click", function () {
  location.reload();
})


// Set message - output it to a paragraph
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}