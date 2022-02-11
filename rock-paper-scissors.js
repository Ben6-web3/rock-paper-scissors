//console.log(computerPlay()); The function returns a random choice between rock,paper, and scissorss
const hand = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return hand[Math.floor(Math.random() * hand.length)];
}
/*playSelection() prompts the user for their choice and generates the computer play
function playSelection() {
    let playerInput = prompt("Choose your hand?", "Rock, paper or scissors?").toLowerCase();
    playerSelection = playerInput;
    computerSelection = computerPlay();
}
//console.log(playSelection());
*/
//created global variables. Is there a way to create scope variables?
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerInput = prompt("Choose your hand?", "Rock, paper or scissors?").toLowerCase();
    playerSelection = playerInput;
    computerSelection = computerPlay();

    if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")) {
        computerScore++;
        return (computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ". The computer has: " + computerScore + " points. You have: " + playerScore + " points.");
    } else if ((playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "rock" && computerSelection == "Scissors")) {
        playerScore++;
        return (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ". The computer has: " + computerScore + " points. You have: " + playerScore + " points.");
    } else (playerSelection == computerSelection)
        return ("Tie!" + " The computer has: " + computerScore + " points. You have: " + playerScore + " points.");
}
/*
playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);
*/

function scoreCheck() {
    if (computerScore > playerScore) {
        return ("The computer wins the game!");
    } else if (playerScore > computerScore) {
        return ("You win the game!")
    } else (playerScore == computerScore)
    return ("Tie");
}

function scoreReset() {
    computerScore = 0;
    playerScore = 0;
}


function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(scoreCheck());
    scoreReset();
}

/*
function gameScore() {
    if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")) {
        computerScore++;
        return ("The computer has " + computerScore + " points.");
    } else if ((playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "rock" && computerSelection == "Scissors")) {
        playerScore++;
        return ("You have " + playerScore + " points.");
    } else (playerSelection == computerSelection)
}
*/

//game();
