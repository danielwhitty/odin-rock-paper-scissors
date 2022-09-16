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
    let playerInput = prompt("Rock, paper, or scissors?");
    if (playerInput === null) {
        // Return value if user cancel's input
        return 1;
    }

    let playerSelection = capitalFirstLetter(playerInput);

    while (playerSelection !== CHOICES[0] && playerSelection !== CHOICES[1] 
        && playerSelection !== CHOICES[2]) {
            alert("Invalid input, try again");
            playerSelection = capitalFirstLetter(prompt("Rock, paper, or scissors?"));
        }

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

        // Check for return value caused by cancelling prompt
        if (roundWinner === 1) {
            i--;
            continue;
        } else if (roundWinner === 'tie') {
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