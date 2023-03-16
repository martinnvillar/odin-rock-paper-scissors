// game options variable

const gameOptions = ["rock", "paper", "scissors"];

// random computer choice function

function getComputerChoice () {
    const randomItem = Math.floor(Math.random() * gameOptions.length);
    const randChoice = gameOptions[randomItem];
    return randChoice;
}

// round counting variables

let playerWins = 0;
let computerWins = 0;
let wins = 5;
let round = 0;
let ties = 0;

// single game function

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! paper beats rock.");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        alert("You win! rock beats scissors.");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! scissors beats paper");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        alert("You lose! paper beats rock.");
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! rock beats scissors.");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! scissors beats paper.")
    }
}