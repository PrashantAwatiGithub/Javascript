let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100.");
    } else {
        prevGuesses.push(guess);
        if (numGuess === 10) {
            displayGuesses(guess);
            displayMessage(`Game Over! The random number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again.`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high! Try again.`);
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'Start New Game';
    newGameButton.classList.add('button');
    startOver.appendChild(newGameButton);
    playGame = false;

    newGameButton.addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuesses = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(newGameButton);
        playGame = true;
    });
}
