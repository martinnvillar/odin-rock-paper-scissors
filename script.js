// Computer choice.

function getComputerChoice() {
    const choice = [
        'rock', 
        'paper', 
        'scissors'
    ];
    const randomItem = Math.floor(Math.random() * choice.length);
    const randChoice = choice[randomItem];
    return randChoice;
}

// Single round game.

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! rock beats scissors.");
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! scissors beats paper.");
        ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win! paper beats rock.");
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! rock beats scissors.");
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose! scissors beats paper.");
        ++computerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose! paper beats rock.");
        ++computerScore;
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

