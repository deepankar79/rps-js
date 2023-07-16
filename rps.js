function computerHand(rng) {
  if (rng === 0) return "rock";
  else if (rng === 1) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection === computerSelection) console.log("DRAW");
  else if (playerSelection === "rock" && computerSelection === "paper")
    console.log("You lose");
  else if (playerSelection === "rock" && computerSelection === "scissors")
    console.log("You win");
  else if (playerSelection === "paper" && computerSelection === "rock")
    console.log("You win");
  else if (playerSelection === "paper" && computerSelection === "scissors")
    console.log("You loose");
  else if (playerSelection === "scissors" && computerSelection === "rock")
    console.log("You loose");
  else if (playerSelection === "scissors" && computerSelection === "paper")
    console.log("You win");
}

const playerSelection = prompt("Enter your hand");
let rng = Math.trunc(Math.random() * 3);
const computerSelection = computerHand(rng);
console.log(computerSelection);
playRound(playerSelection, computerSelection);
