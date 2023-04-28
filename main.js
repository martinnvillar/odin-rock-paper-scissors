// user options and buttons

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const scoreTxt = document.getElementById('score');
const resultTxt = document.getElementById('result');

rockBtn.addEventListener('click', () => {
    play(ROCK);
})

paperBtn.addEventListener('click', () => {
    play(PAPER);
})

scissorsBtn.addEventListener('click', () => {
    play(PAPER);
})

// game variables

const TIE = 0;
const WIN = 1;
const LOSE = 2;

// game functions

function play(userChoice) {
    const getCompChoice = Math.floor(Math.random() * 3);
    
    const score = getResult(userChoice, getCompChoice);

    switch(score){
        case TIE:
            scoreTxt.innerHTML = 'Tie!';
            break;
        case WIN:
            scoreTxt.innerHTML = 'You win!';
            break;
        case LOSE:
            scoreTxt.innerHTML = 'You lose!';
            break;
    }
}

function getResult (userChoice, getCompChoice) {
    if (userChoice === getCompChoice) {
        return TIE;
    } else if (userChoice === ROCK && getCompChoice === PAPER) {
        return LOSE;
    } else if (userChoice === ROCK && getCompChoice === SCISSORS) {
        return WIN;
    } else if (userChoice === PAPER && getCompChoice === ROCK) {
        return WIN;
    } else if (userChoice === PAPER && getCompChoice === SCISSORS) {
        return LOSE;
    } else if (userChoice === SCISSORS && getCompChoice === PAPER) {
        return WIN;
    } else if (userChoice === SCISSORS && getCompChoice === ROCK) {
        return LOSE;
    }
}

function scoreResult (score) {
    if (TIE++) {
        resultTxt.innerHTML('0-0');
    } else if (WIN++){
        resultTxt.innerHTML('1-0');
    } else if (LOSE++) {
        resultTxt.innerHTML('0-1');
    }
}