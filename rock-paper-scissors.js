const hand = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return hand[Math.floor(Math.random() * hand.length)];
}
//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")) {
        return alert("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if ((playerSelection == "paper" && computerSelection == "Rock") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "rock" && computerSelection == "Scissors")) {
        return alert("You Win! " + playerSelection + " beats " + computerSelection);
    } else (playerSelection == computerSelection)
        return alert("Its a Tie!");
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {

}