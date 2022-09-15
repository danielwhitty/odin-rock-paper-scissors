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

// Plays a single game of Rock Paper Scissors, returns name of winner
function playRound() {
    let winMessage = 'You win!';
    let lossMessage = 'You lose!';
    let tieMessage = 'You tie!';
    
    // Get input from player
    let playerSelection = capitalFirstLetter(prompt("Rock, paper, or scissors?"));

    // Get computer choice
    let computerSelection = getComputerChoice();

    // Check for winner
    switch (playerSelection) {
        case 'Rock':
             return (computerSelection === 'Paper') ? 'computer' :
                (computerSelection === 'Scissors') ? 'player' :
                'tie';
        case 'Paper':
            return (computerSelection === 'Scissors') ? 'computer' :
                (computerSelection === 'Rock') ? 'player' :
                'tie';
        case 'Scissors':
            return (computerSelection === 'Rock') ? 'computer' :
                (computerSelection === 'Paper') ? 'player' :
                'tie';
    }
}

// Plays a game with numGames rounds
function game(numGames) {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < numGames; i++) {
        let roundWinner = playRound();
        if (roundWinner === 'tie') {
            console.log(`Round ${i + 1}\nIt's a tie!`);
            continue;
        }
        console.log(`Round ${i + 1}\nThe winner is: ${roundWinner}!`);
        (roundWinner === 'player') ? playerWins++ : computerWins++;
    }

    let gameWinner = (playerWins > computerWins) ? 'player' :
        (computerWins > playerWins) ? 'computer' : 'tie';

    console.log(`WIN TOTALS\nPlayer: ${playerWins}\nComputer: ${computerWins}`);
    if (gameWinner = 'tie') {
        console.log('It\'s a tie!');
    } else {
        console.log(`${capitalFirstLetter(gameWinner)} wins!`);
    }
}