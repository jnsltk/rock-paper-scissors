//Program prompts player
//Computer makes its own selection
    //function computerPlay returns a random selection of either rock paper or scissors
function computerPlay() {
    const computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

//Compares the two selections
//Declares winner

console.log(computerPlay());