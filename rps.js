let cmpscore, plrscore;
cmpscore = plrscore = 0;

const btnR = document.querySelector(".btnR");
const btnP = document.querySelector(".btnP");
const btnS = document.querySelector(".btnS");
const btnReset = document.querySelector(".reset");
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

function resetGame() {
  cmpscore = plrscore = 0;
  document.getElementById("pscore").textContent = 0;
  document.getElementById("cscore").textContent = 0;
  phand.src = "wait.png";
  chand.src = "wait.png";
  btnR.disabled = btnS.disabled = btnP.disabled = false;
  btnR.style.opacity = btnP.style.opacity = btnS.style.opacity = 1;
  btnR.classList.add("btnh");
  btnP.classList.add("btnh");
  btnS.classList.add("btnh");
  document.getElementById("dspresult").textContent = "First to score 5 wins";
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

  if (cmpscore === 5 || plrscore === 5) {
    btnR.disabled = btnS.disabled = btnP.disabled = true;
    btnR.style.opacity = btnP.style.opacity = btnS.style.opacity = 0.6;
    btnR.classList.remove("btnh");
    btnP.classList.remove("btnh");
    btnS.classList.remove("btnh");
    if (cmpscore === 5)
      document.getElementById("dspresult").textContent =
        "Game over you lost the tie";
    else
      document.getElementById("dspresult").textContent =
        "Game over you won the tie";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    return 2;
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    return 1;
}

//Events

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

btnReset.addEventListener("click", resetGame);
