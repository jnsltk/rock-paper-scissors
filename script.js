//set the scores
let usrScore = 0;
let computerScore = 0;
let winner = '';


//function computerPlay returns a random selection of either rock paper or scissors
function computerPlay() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

//Compares the two selections and declares a winner
function playRound(playerSelection, computerSelection) {
    const draw =  ['noWinner', `It\'s a draw! You both played ${playerSelection}!`, computerSelection, playerSelection];
    const loseMessage = ['computerWon', `You lose! ${capitalize(computerSelection)} beats ${playerSelection}!`, computerSelection, playerSelection];
    const winMessage = ['playerWon', `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`, computerSelection, playerSelection];
    switch (playerSelection) {
        case computerSelection: //if both selections are the same return a message that it's a draw
            return draw;
        case 'rock': //check all cases where player selects rock
            switch (computerSelection) {
                case 'paper': 
                    return loseMessage;
                case 'scissors':
                    return winMessage;
            }
        case 'paper': //check all cases where player selects paper
            switch (computerSelection) {
                case 'scissors':
                    return loseMessage;
                case 'rock':
                    return winMessage;
            }
        case 'scissors': //check all cases where player selects scissors
            switch (computerSelection) {
                case 'rock':
                    return loseMessage;
                case 'paper':
                    return winMessage;
            }                 
    }
}
function capitalize(string) {
    let lowerCase = string.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
function btnClick(usrSelection) {
    let result = playRound(usrSelection, computerPlay());
    displayChoices(result[2], result[3]);
    message.textContent = result[1];
    switch (result[0]) {
        case 'playerWon': 
            usrScore++;
            break;
        case 'computerWon': 
            computerScore++;
            break;
    }
    updateScore(result[1]);
    if (isGameOverYet()) endGame();
}
function updateScore(msg) {
    usrScorePara.textContent = `You: ${usrScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    message.textContent = msg;
}
function isGameOverYet() {
    return (usrScore === 5 || computerScore === 5);
}
function endGame() {
    if (usrScore > computerScore) {
        winner = 'You';
    } else {
        winner = 'The computer';
    }
    showModal(winner);
}
function showModal(winner) {
    modal.style.display = 'flex';
    modalText.textContent = `Game over! ${winner} won!`
}
function resetGame() {
    modal.style.display = 'none';
    usrScore = 0;
    computerScore = 0;
    updateScore();
    message.textContent = 'Make your choice!';
    computerSelectionDisp.textContent = 'The computer\'s choice >>>>>>> ???';
    usrSelectionDisp.textContent = 'Your choice >>>>>>> ???';
}
function displayChoices(computerSelection, usrSelection) {
    switch (computerSelection) {
        case 'rock':
            computerSelection = 'The computer\'s choice >>>>>>> ????';
            break;
        case 'paper':
            computerSelection = 'The computer\'s choice >>>>>>> ????';
            break;
        case 'scissors':
            computerSelection = 'The computer\'s choice >>>>>>> ??????';
            break;
    }
    switch (usrSelection) {
        case 'rock':
            usrSelection = 'Your choice >>>>>>> ????';
            break;
        case 'paper':
            usrSelection = 'Your choice >>>>>>> ????';
            break;
        case 'scissors':
            usrSelection = 'Your choice >>>>>>> ??????';
            break;
    }
    computerSelectionDisp.textContent = computerSelection;
    usrSelectionDisp.textContent = usrSelection;
}

//UI
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const message = document.querySelector('#message');
const usrScorePara = document.querySelector('#usr-score');
const computerScorePara = document.querySelector('#computer-score');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const playAgainBtn = document.querySelector('.play-again');
const usrSelectionDisp = document.querySelector('#usrChoice');
const computerSelectionDisp = document.querySelector('#computerChoice');

rockBtn.addEventListener('click', () => btnClick('rock'));
paperBtn.addEventListener('click', () => btnClick('paper'));
scissorsBtn.addEventListener('click', () => btnClick('scissors'));
playAgainBtn.addEventListener('click', () => resetGame());