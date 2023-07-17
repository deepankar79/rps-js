const btnR = document.querySelector(".btnR");
const btnP = document.querySelector(".btnP");
const btnS = document.querySelector(".btnS");
const phand = document.querySelector(".phand");
const chand = document.querySelector(".chand");

function computerHand(rng) {
  if (rng === 0) return "rock";
  else if (rng === 1) return "paper";
  else return "scissors";
}

function play(pSelection) {
  const playerSelection = pSelection.toLowerCase();
  let crrsScore;
  let rng = Math.trunc(Math.random() * 3);
  const computerSelection = computerHand(rng);
  displayhand(playerSelection, computerSelection);
  crrsScore = playRound(playerSelection, computerSelection);
  evaluate(crrsScore);
}

function displayhand(playerSelection, computerSelection) {
  phand.src = `${playerSelection}.png`;
  chand.src = `${computerSelection}.png`;
}

function evaluate(crrsScore) {
  if (crrsScore === 0) {
    document.getElementById("dspresult").textContent = "You draw";
  } else if (crrsScore === 1) {
    document.getElementById("dspresult").textContent = "You win";
    plrscore++;
    document.getElementById("pscore").textContent = plrscore;
  } else {
    document.getElementById("dspresult").textContent = "You lose";
    cmpscore++;
    document.getElementById("cscore").textContent = cmpscore;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  else if (playerSelection === "rock" && computerSelection === "paper")
    return 2;
  else if (playerSelection === "rock" && computerSelection === "scissors")
    return 1;
  else if (playerSelection === "paper" && computerSelection === "rock")
    return 1;
  else if (playerSelection === "paper" && computerSelection === "scissors")
    return 2;
  else if (playerSelection === "scissors" && computerSelection === "rock")
    return 2;
  else if (playerSelection === "scissors" && computerSelection === "paper")
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
