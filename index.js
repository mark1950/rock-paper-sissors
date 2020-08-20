let playerSelection;
let computerSeletion;

let playerWins = Boolean;
let computerWins = Boolean;

let playerScore = 0;
let computerScore = 0;

let gameMessage = document.querySelector('#gameMessage');
let yourScore = document.querySelector('.yourScore');
let cpuScore = document.querySelector('.cpuScore');


function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if(selection === 0) {
        return 'rock';
    } 
    else if(selection === 1) {
        return 'paper';
    }
    else if(selection === 2) {
        return 'sissors';
    }
}


function compScore() {
    if(computerWins = true) {
        computerScore++;
        cpuScore.textContent = `${computerScore}`;
    }
}

function playScore() {
    if(playerWins = true) {
        playerScore++;
        yourScore.textContent = `${playerScore}`;
    }
}




function playRound() {
    if(playerSelection === computerSeletion) {
        gameMessage.textContent = 'Its a draw';
    }
    else if(playerSelection === 'rock' && computerSeletion === 'paper') {
        playerWins = false
        computerWins = true;
        compScore();
        gameMessage.textContent = 'You lose!';
    }
    else if(playerSelection === 'rock' && computerSeletion === 'sissors') {
        playerWins = true;
        computerWins = false;
        playScore();
        gameMessage.textContent = 'You Win';
    }
    else if(playerSelection === 'paper' && computerSeletion === 'sissors') {
        playerWins = false;
        computerWins = true;
        compScore();
        gameMessage.textContent = 'You lose';
    }
    else if(playerSelection === 'paper' && computerSeletion === 'rock') {
        playerWins = true;
        computerWins = false;
        playScore();
        gameMessage.textContent = 'You Win';
    }
    else if(playerSelection === 'sissors' && computerSeletion === 'rock') {
        playerWins = false;
        computerWins = true;
        compScore();
        gameMessage.textContent = 'You lose';
    }
    else if(playerSelection === 'sissors' && computerSeletion === 'paper') {
        playerWins = true;
        computerWins = false;
        playScore();
        gameMessage.textContent = 'You Win';
    }
}



    const rockBtn = document.querySelector('.rockBtn');
        rockBtn.addEventListener('click', () => {
            playerSelection = 'rock';
            computerSeletion = computerPlay();
            playRound();
        });

    const paperBtn = document.querySelector('.paperBtn');
        paperBtn.addEventListener('click', () => {
            playerSelection = 'paper';
            computerSeletion = computerPlay();
            playRound();
        });


    const sissorsBtn = document.querySelector('.sissorsBtn');
        sissorsBtn.addEventListener('click', () => {
            playerSelection = 'sissors';
            computerSeletion = computerPlay();
            playRound();
        });
    


    const resetGameBtn = document.querySelector('.resetGameBtn');
        resetGameBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        cpuScore.textContent = `${computerScore}`;
        yourScore.textContent = `${playerScore}`;
        gameMessage.textContent = 'Lets Go!';
        });
