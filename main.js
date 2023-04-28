// user options and buttons
let PLAYER_SCORE = 0;
let CPU_SCORE = 0;
const scoreElement = document.getElementById('scorePoints')
const cpuScore = document.getElementById('scoreCpu')

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const scoreTxt = document.getElementById('score');

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
            scoreTxt.innerText = 'Tie!';
            break;
        case WIN:
            scoreTxt.innerText = 'You win!';
            PLAYER_SCORE += 1
             // CPU_SCORE ? CPU_SCORE -= 1 : CPU_SCORE // ternario
            setScore(PLAYER_SCORE)
            setCpuScore(CPU_SCORE)
            break;
        case LOSE:
            // PLAYER_SCORE ? PLAYER_SCORE -= 1 : PLAYER_SCORE // ternario
            CPU_SCORE += 1
            scoreTxt.innerText = 'You lose!';
            setScore(PLAYER_SCORE)
            setCpuScore(CPU_SCORE)
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

function setScore (score) {
    scoreElement.innerText = score
    if (score == 5){
        alert('Gano player')
        window.location.reload()
    }
}

function setCpuScore (score) {
    cpuScore.innerText = score
    if (score == 5) {
    alert('Gano cpu')
    window.location.reload()
    }
    }