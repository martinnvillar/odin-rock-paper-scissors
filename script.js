// Computer and player choice.

function getComputerChoice() {
    const choice = [
        'rock', 
        'paper', 
        'scissors'
    ];
    const randomItem = Math.floor(Math.random() * choice.length);
    const randChoice = choice[randomItem];
}

function playerChoice () {
    const choice = [
        'rock',
        'paper',
        'scissors'
    ]
    let choice1 = prompt("Choose paper, rock or scissors: ");
    console.log(choice1);
}

// Single round

function singleRound (computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return ("It's a draw!");
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return ("You lose! paper beats rock.");
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        return ("You lose! scissors beats paper. ");
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return ("You lose! rock beats scissors.");
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return ("You win! paper beats rock.");
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return ("You win! scissors beats paper.");
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return ("You win! rock beats scissors.");
    }
}



