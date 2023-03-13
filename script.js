// Computer and player choice.

function getComputerChoice() {
    const choice = [
        'rock', 
        'paper', 
        'scissors'
    ];
    const randomItem = Math.floor(Math.random() * choice.length);
    const randChoice = choice[randomItem];
    console.log(randChoice);
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


