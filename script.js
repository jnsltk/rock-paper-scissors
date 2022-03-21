//Program prompts player
let playerSelection = prompt('Please make your selection of either rock, paper or scissors: ', 'rock/paper/scissors');
//Computer makes its own selection
    //function computerPlay returns a random selection of either rock paper or scissors
function computerPlay() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

//Compares the two selections
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}!`
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}!`
    switch (playerSelection) {
        case computerSelection: //if both selections are the same return a message that it's a draw
            return `It\'s a draw! You and the computer both played ${playerSelection}!`;
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
        default:
            return 'Something went wrong!'
    }
}
//Declares winner

//console.log(computerPlay());
//console.log(playerSelection);
console.log(playRound(playerSelection, computerPlay()));