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

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    let playerInput = prompt("Choose your hand?", "Rock, paper or scissors?").toLowerCase();
    playerSelection = playerInput;
    computerSelection = computerPlay();

    if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")) {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if ((playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "rock" && computerSelection == "Scissors")) {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else (playerSelection == computerSelection)
        return ("Its a Tie!");
}
/*
playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);
*/
function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}

//let playerScore = 0;
//let computerScore = 0;

function gameScore() {
    if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")) {
        computerScore++;
        return ("The computer has " + computerScore + " points.");
    } else if ((playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "rock" && computerSelection == "Scissors")) {
        playerScore++;
        return ("You have " + playerScore + " points.");
    } else (playerSelection == computerSelection)
}

//game();
