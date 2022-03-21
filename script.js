
//Computer makes its own selection
    //function computerPlay returns a random selection of either rock paper or scissors
function computerPlay() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

//Compares the two selections and declares a winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const draw =  ['noWinner', `It\'s a draw! You and the computer both played ${playerSelection}!`];
    const loseMessage = ['computerWon', `You lose! ${capitalize(computerSelection)} beats ${playerSelection}!`];
    const winMessage = ['playerWon', `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`];
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) { //game keeps going for 5 rounds
        let playerSelection = prompt('Please make your selection of either rock, paper or scissors: ', 'rock/paper/scissors'); //game prompts player
        let roundResult = playRound(playerSelection, computerPlay()); //calls the playRound() function, which plays a round of the game and stores who won, and the message in the array roundResult
        switch (roundResult[0]) { //calls playRound() function to play a round of the game, and checks the result of the game to see who won
            case 'noWinner':
                console.log(roundResult[1] + ` Your current score: ${playerScore}, the computer's current score: ${computerScore}`);
                break;
            case 'computerWon':
                computerScore++;
                console.log(roundResult[1] + ` Your current score: ${playerScore}, the computer's current score: ${computerScore}`);
                break;
            case 'playerWon':
                playerScore++;
                console.log(roundResult[1] + ` Your current score: ${playerScore}, the computer's current score: ${computerScore}`);
                break;
            default: 
                return 'Error!!!'
                break;
        } 
        
    }
    if (playerScore > computerScore) {
        return 'Game Over! You win!';
    } else if (playerScore < computerScore) {
        return 'Game Over! You lose, better luck next time!';
    } else {
        return 'Game Over! It\'s a draw!'
    }
    
}
console.log(game());