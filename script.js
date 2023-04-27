// game options variables and functions

const gameOptions = ["rock", "paper", "scissors"];

const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');

ROCK.addEventListener('click', () => {
    console.log('you choose rock');
})

PAPER.addEventListener('click', () => {

})

SCISSORS.addEventListener('click', () => {

})

// random computer choice function

function getComputerChoice() {
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

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("It's a tie!");
    ties++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("You win! paper beats rock.");
    playerWins++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("You win! rock beats scissors.");
    playerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("You win! scissors beats paper");
    playerWins++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert("You lose! paper beats rock.");
    computerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert("You lose! rock beats scissors.");
    computerWins++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert("You lose! scissors beats paper.");
    computerWins++;
  }
}

// five round game

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let computerChoice = getComputerChoice();
//         let playerChoice = prompt("Choose rock, paper or scissors: ");
//         playerChoice = playerChoice.toLocaleLowerCase();
//         if (playerChoice == "") {
//             alert("You should write rock, paper or scissors!")
//         } else {
//             playRound(playerChoice, computerChoice);
//             round++;
//             console.log("This is the round number " + round);
//         }
//     }
//     if (playerWins > computerWins) {
//         alert("You WIN!");
//     } else if (playerWins === computerWins) {
//         alert("Game TIE!");
//     } else {
//         alert("Computer BEATS you!");
//     }
// }

// game();
