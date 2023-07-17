function computerHand(rng) {
  if (rng === 0) return "rock";
  else if (rng === 1) return "paper";
  else return "scissors";
}

function play(playerSelection) {
  let rng = Math.trunc(Math.random() * 3);
  const computerSelection = computerHand(rng);
  playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionOrdered = playerSelection.toLowerCase();
  if (playerSelectionOrdered === computerSelection) console.log("DRAW");
  else if (playerSelectionOrdered === "rock" && computerSelection === "paper")
    console.log("You lose");
  else if (
    playerSelectionOrdered === "rock" &&
    computerSelection === "scissors"
  )
    console.log("You win");
  else if (playerSelectionOrdered === "paper" && computerSelection === "rock")
    console.log("You win");
  else if (
    playerSelectionOrdered === "paper" &&
    computerSelection === "scissors"
  )
    console.log("You loose");
  else if (
    playerSelectionOrdered === "scissors" &&
    computerSelection === "rock"
  )
    console.log("You loose");
  else if (
    playerSelectionOrdered === "scissors" &&
    computerSelection === "paper"
  )
    console.log("You win");
}

// const playerSelection = prompt("Enter your hand");
const btnR = document.querySelector(".btnR");
const btnP = document.querySelector(".btnP");
const btnS = document.querySelector(".btnS");
btnR.addEventListener("click", function (e) {
  const choice = document.querySelector(".btnR").textContent;
  play(choice);
});
btnP.addEventListener("click", function (e) {
  const choice = document.querySelector(".btnP").textContent;
  play(choice);
});
btnS.addEventListener("click", function (e) {
  const choice = document.querySelector(".btnS").textContent;
  play(choice);
});
