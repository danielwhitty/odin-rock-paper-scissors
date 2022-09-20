// Array of possible choices
const CHOICES = ['rock', 'paper', 'scissors'];

// Gets random choice for computer player
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

// Function to ensure user input matches capitalisation of CHOICES array
function capitalFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() 
        + word.slice(1, word.length).toLowerCase();
}

// Plays a single game of Rock Paper Scissors, returns name of winner
function playRound(playerInput) {
    let playerSelection = playerInput.toLowerCase();

    // Get computer choice
    let computerSelection = getComputerChoice();

    // Check for winner
    switch (playerSelection) {
        case 'rock':
             if (computerSelection === 'paper') {
                updateScore('computer');
                break;
             } else if (computerSelection === 'scissors') {
                updateScore('player');
                break;
             } else {
                break;
             }
        case 'paper':
            if (computerSelection === 'scissors') {
                updateScore('computer');
                break;
             } else if (computerSelection === 'rock') {
                updateScore('player');
                break;
             } else {
                break;
             }
        case 'scissors':
            if (computerSelection === 'rock') {
                updateScore('computer');
                break;
             } else if (computerSelection === 'paper') {
                updateScore('player');
                break;
             } else {
                break;
             }
    }
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerPara.textContent = `Computer: ${++computerWins}`;
    } else if (winner === 'player') {
        playerPara.textContent = `Player: ${++playerWins}`;
    }
}

// Add score elements to page
const resultsDiv = document.querySelector('.results');

let playerWins = 0;
let computerWins = 0;

const playerPara = document.createElement('p');
playerPara.textContent = 'Player: 0';

const computerPara = document.createElement('p');
computerPara.textContent = 'Computer: 0';

resultsDiv.appendChild(playerPara);
resultsDiv.appendChild(computerPara);

// Add playRound functionality to buttons
let buttons = document.querySelectorAll('.options > button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(`${button.textContent}`)}
)});