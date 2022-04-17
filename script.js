
//function computerPlay returns a random selection of either rock paper or scissors
function computerPlay() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

//Compares the two selections and declares a winner
function playRound(playerSelection, computerSelection) {
    const draw =  ['noWinner', `It\'s a draw! You and the computer both played ${playerSelection}!`];
    const loseMessage = ['computerWon', `You lose! ${capitalize(computerSelection)} beats ${playerSelection}!`];
    const winMessage = ['playerWon', `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`];
    const errorMessage = ['error', 'Error! Did you type your selection correctly? Game is over.'];
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
        default: // if player selection is something else return an error
            return errorMessage;
    }
}
function capitalize(string) {
    let lowerCase = string.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

//UI
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => console.log(playRound('rock', computerPlay())));
paperBtn.addEventListener('click', () => console.log(playRound('paper', computerPlay())));
scissorsBtn.addEventListener('click', () => console.log(playRound('scissors', computerPlay())));