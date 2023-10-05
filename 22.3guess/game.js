// give vraibles to the relevant classes in html
// the secret letter
// right or wrong messages in)
//play again container
//(letters-guessed-wrong/guesses
//reset button

const letterToGuess = document.querySelector(".letter-to-guess");
const rightOrWrong = document.querySelector(".wrong-right-message");
const playAgainWindow = document.querySelector(".play-again-container");
const guesses = document.querySelector(".guesses");
const resetButton = document.querySelector("button");

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
//
const winGame = () => {
  rightOrWrong.textContent = "Right Letter";
  rightOrWrong.classList.remove("wrong");
  rightOrWrong.classList.add("right");
  playAgainWindow.style.display = "flex";
  letterToGuess.textContent = letterToFind;
  letterToGuess.classList.add("guess-right-letter");
  isGameWon = true;
};

const wrongGuess = (key) => {
  const letters = guesses.textContent;
  rightOrWrong.classList.remove("right");
  rightOrWrong.classList.add("wrong");
  if (alreadyPickedLetters.includes(key)) {
    rightOrWrong.textContent = ` Nope, Already Guessed ${key}`;
    return;
  }
  rightOrWrong.textContent = "Nope, Wrong letter";
  alreadyPickedLetters.push(key);
  if (letters === "") {
    guesses.textContent = `${key}`;
    return;
  }
  guesses.textContent = `${letters}, ${key}`;
};

const resetGame = () => {
  letterToFind = getRandomChar();
  rightOrWrong.classList.remove("wrong");
  rightOrWrong.classList.remove("right");
  playAgainWindow.style.display = "none";
  letterToGuess.classList.remove("guess-right-letter");
  letterToGuess.textContent = "?";
  rightOrWrong.textContent = "Guess a letter";
  guesses.textContent = "";
  isGameWon = false;
  alreadyPickedLetters = [];
};

letterToFind = getRandomChar();

resetButton.addEventListener("click", () => {
  resetGame();
});

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
