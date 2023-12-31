'use strict';

// - Accessing and defining elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const switchPlayer = function () {
    // Set current score of active player to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // Switch the active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    /* document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); // make active player inactive
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active'); // make inactive player active */
};

// - Initital conditions
let scores; // Array of total scores
let activePlayer;
let currentScore; // Current score of the active player
let isGameOn;

const init = function () {
    // Set all scores to zero
    score0.textContent = 0;
    score1.textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    scores = [0, 0];
    currentScore = 0;

    dice.classList.add('hidden');

    // Remove if any winner decorations
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    // Make first player active
    activePlayer = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    // GAME ON AGAIN
    isGameOn = true;
};

init();

// - Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (isGameOn) {
        // 1 - Generate a random number between 1 and 6 (inclusive)
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        // 2 - Display the dice image according to the generated number
        dice.classList.remove('hidden');
        dice.src = `images/dice-${diceNumber}.png`;

        // 3 - Handle the output of the dice
        if (diceNumber !== 1) {
            // Add dice value to the current score of the active player
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// - Holding score functionality
btnHold.addEventListener('click', function () {
    if (isGameOn) {
        // 1 - Add current score to total score of active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2 - Check if the total score of active player exceeds 100
        if (scores[activePlayer] >= 100) {
            // Display the active player as winner
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('active-player');

            // Finish the game
            isGameOn = false;

            // Hide the dice
            dice.classList.add('hidden');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// - Resetting game functionality
btnNewGame.addEventListener('click', init);
