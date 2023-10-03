'use strict';

// - Accessing and defining elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// - Initital conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// - Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1 - Generate a random number between 1 and 6 (inclusive)
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2 - Display the dice image according to the generated number
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;
});
