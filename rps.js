const btnR = document.querySelector(".btnR");
const btnP = document.querySelector(".btnP");
const btnS = document.querySelector(".btnS");

function computerHand(rng) {
  if (rng === 0) return "rock";
  else if (rng === 1) return "paper";
  else return "scissors";
}

function play(playerSelection) {
  let crrsScore;
  let rng = Math.trunc(Math.random() * 3);
  const computerSelection = computerHand(rng);
  crrsScore = playRound(playerSelection, computerSelection);
  evaluate(crrsScore);
}

function evaluate(crrsScore) {
  if (crrsScore === 0) {
    console.log("You Draw");
    document.getElementById("dspresult").textContent = "You draw";
  } else if (crrsScore === 1) {
    console.log("You win");
    document.getElementById("dspresult").textContent = "You win";
    plrscore++;
  } else {
    console.log("You lose");
    document.getElementById("dspresult").textContent = "You lose";
    cmpscore++;
  }
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionOrdered = playerSelection.toLowerCase();
  if (playerSelectionOrdered === computerSelection) return 0;
  else if (playerSelectionOrdered === "rock" && computerSelection === "paper")
    return 2;
  else if (
    playerSelectionOrdered === "rock" &&
    computerSelection === "scissors"
  )
    return 1;
  else if (playerSelectionOrdered === "paper" && computerSelection === "rock")
    return 1;
  else if (
    playerSelectionOrdered === "paper" &&
    computerSelection === "scissors"
  )
    return 2;
  else if (
    playerSelectionOrdered === "scissors" &&
    computerSelection === "rock"
  )
    return 2;
  else if (
    playerSelectionOrdered === "scissors" &&
    computerSelection === "paper"
  )
    return 1;
}

let cmpscore, plrscore;
cmpscore = plrscore = 0;

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
