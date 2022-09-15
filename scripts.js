// Array of possible choices
const CHOICES = ['Rock', 'Paper', 'Scissors'];

// Gets random choice for computer player
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

// Function to ensure user input matches capitalisation of CHOICES array
function capitalFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() 
        + word.slice(1, word.length).toLowerCase();
}

// Plays a single game of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    let winMessage = 'You win!';
    let lossMessage = 'You lose!';
    let tieMessage = 'You tie!';

    // Get input from player
    let playerSelection = capitalFirstLetter(prompt("Rock, paper, or scissors?"));
    
    switch (playerSelection) {
        case 'Rock':
            computerSelection === 'Paper' ? console.log(lossMessage) :
                computerSelection === 'Scissors' ? console.log(winMessage) :
                console.log(tieMessage);
                break;
        case 'Paper':
            computerSelection === 'Scissors' ? console.log(lossMessage) :
                computerSelection === 'Rock' ? console.log(winMessage) :
                console.log(tieMessage);
                break;
        case 'Scissors':
            computerSelection === 'Rock' ? console.log(lossMessage) :
                computerSelection === 'Paper' ? console.log(winMessage) :
                console.log(tieMessage);
                break;
    }
}