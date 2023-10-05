// give vraibles to the relevant classes in html
// the secret letter letterToGuess
// right or wrong messages in)
//play again container
//(letters-guessed-wrong/guesses
//reset button
let letterToGuess = document.querySelector(".letter-to-guess");
let RightOrWrong = document.querySelector(".wrong-right-message");
let playAgainWindow = document.querySelector(".play-again-container");
let guesses = document.querySelector(".guesses");
let resetButton = document.querySelector("button");

//build a global constat - a string holding all of the abc's
// create an empty string for the random letter
// create a variable isGameWon (bool) - starting off as false
//make an empty array for letters already picked
const ALL_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
let letterToFind = "";
let isGameWon = false;
let alreadyPickedLetters = [];

// create a function that returns random letter

const getRandomChar = () => {
  const charsLength = ALL_CHARACTERS.length;
  return ALL_CHARACTERS.charAt(Math.floor(Math.random() * charsLength));
};

//create a function called win game that:
//a update the right or wrong message into "Right Letter"
// remove the class wrong from right or wrong variable the using ClassList method to .remove("wrong") class
// add the class right from right or wrong variable the using ClassList method to .add("right") class

// assign to the the playAgainWindow. style . display to = "flex";

//change letterToGuess textContent to letterToFind

//add to Letter to Guess using classList method in order to add() "guess-right-letter" class

// equate isGameWon to true
function winGame() {
  RightOrWrong.textContent = "Right Letter";
  RightOrWrong.classList.remove("wrong");
  RightOrWrong.classList.add("Right");
  playAgainWindow.style.display = "flex";
  letterToGuess.textContent = letterToFind; //?
  letterToGuess.classList.add("guess-right-letter");
  isGameWon = true;
}

//create a function called Wrong guess that takes key as an arguement:
// eqaute the letters variable to guesses' text Content
//remove from RightOrWrong using the class list method to remove the class "right"
// add the class wrong from right or wrong variable the using ClassList method to .add("wrong") class

// create an if test the  cheack if alreadyPickedLetters.includes(key)
// if it does equate the rightOrWrong text content to `Nope, already guessed ${key}`
// return
// after the if, but in the wrong guess function: eqaute the the guesses text content to = `${letters}, ${key};
function wrongGuess(key) {
  const letters = guesses.textContent; //?
  rightOrWrong.classList.remove("right");
  rightOrWrong.classList.add("wrong");
  if (alreadyPickedLetters.includes(key)) {
    rightOrWrong.textContent = `Nope, already guessed ${key}`;
    return;
  }
  rightOrWrong.textContent = "Nope, Wrong letter";
  alreadyPickedLetters.push(key);
  if (letters === "") {
    guesses.textContent = `${key}`;
    return;
  }
  guesses.textContent = `${letters}, ${key}`;
}

// create a reset game function and in it:
// equate letterToFind to the get random char faunction
// remove from the right or wrong class list the class wrong
// remove from the right or wrong class list the class right
// make that play again window. style . display equals "none";

// remove from letter to guess the classList "guess-right-letter"

// eqaute letter to guess text content to ?

// equate the Right or wrong text content to guess a letter

// eqaute the guesses text content to an empty string
// change the isgamewon to false
// make already picked letters to an empty array

function resetGame() {
  letterToFind = getRandomChar();
  rightOrWrong.classList.remove("wrong");
  rightOrWrong.classList.remove("right");
  playAgainWindow.style.display = "none";
  letterToGuess.textContent = "?";
  rightOrWrong.textContent = "Guess a Letter";
  guesses.textContent = "";
  isGameWon = false;
  alreadyPickedLetters = [];
}

// equate the letter to find the get random function
letterToFind = getRandomChar();

// add an event listener to the reset button
// once its click call the rest game function
resetButton.addEventListener("click", () => {
  resetGame();
});

// to the window add an event listener function keyup action
// put event inside the function parameter
// equate the key to the event . key . lower case method
// if game won return

// if keyeqaules letter to find call wingame function

//else if (ALL_CHARACTERS. includes key) the call the wrong guess function with the key parameter

window.addEventListener("keyup", (event) => {
  const key = event.key.toLocaleLowerCase();
  if (isGameWon) {
    return;
  }
  if (key === letterToFind) {
    winGame();
  } else if (ALL_CHARACTERS.includes(key)) {
    wrongGuess(key);
  }
});

console.log(letterToFind);
