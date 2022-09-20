// Array of possible choices
const CHOICES = ['rock', 'paper', 'scissors'];

// Gets random choice for computer player
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

// Function to capitlise first letter of a word
function capitalFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() 
        + word.slice(1, word.length).toLowerCase();
}

// Plays a single game of Rock Paper Scissors, returns name of winner
function playRound(playerInput) {
    let playerSelection = playerInput.toLowerCase();

    // Get computer choice
    let computerSelection = getComputerChoice();

    // Add paragraph elemnts to page regarding current choices
    const playerChoicePara = document.querySelector('#player-choice');
    const computerChoicePara = document.querySelector('#computer-choice');

    // Add selections to above para elements
    playerChoicePara.textContent = `Player chose ${playerSelection}`;
    computerChoicePara.textContent = `Computer chose ${computerSelection}`;

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
                updateScore('tie');
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
                updateScore('tie');
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
                updateScore('tie');
                break;
             }
    }
}

function updateScore(winner) {
    const winnerPara = document.querySelector('#round-winner');
    
    if (winner === 'computer') {
        computerScorePara.textContent = `Computer: ${++computerWins}`;
    } else if (winner === 'player') {
        playerScorePara.textContent = `Player: ${++playerWins}`;
    }

    // Check for 5 wins
    if (computerWins === 5 || playerWins == 5) {
        const optionsDiv = document.querySelector('.options');
        optionsDiv.style.display = 'none';
        winnerPara.textContent = 
            `GAME OVER!: ${capitalFirstLetter(winner)} wins the game!`;
        return;
    }

    // Add results of current round to page
    if (winner === 'tie') {
        winnerPara.textContent = 'It\'s a tie!';
    } else {
        winnerPara.textContent = `${capitalFirstLetter(winner)} wins the round!`;
    }
    
}

// Add score elements to page
const resultsDiv = document.querySelector('.results');

let playerWins = 0;
let computerWins = 0;

const playerScorePara = document.createElement('p');
playerScorePara.textContent = 'Player: 0';

const computerScorePara = document.createElement('p');
computerScorePara.textContent = 'Computer: 0';

resultsDiv.appendChild(playerScorePara);
resultsDiv.appendChild(computerScorePara);

// Add playRound functionality to buttons
let buttons = document.querySelectorAll('.options > button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(`${button.textContent}`)}
)});