let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice(arr) {
  item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}
// getComputerChoice(arr);
// console.log(getComputerChoice(arr));
const playerSelection = "rock";
const computerSelection = getComputerChoice(arr);

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log(playerSelection);
    console.log(computerSelection);

    console.log("You Lose! Paper beats Rock");
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log(playerSelection);
    console.log(computerSelection);

    console.log("You Lose! Rock beats Scissors");
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log(playerSelection);
    console.log(computerSelection);

    console.log("You Lose! Scissors beats Paper");
  } else {
    console.log(playerSelection);
    console.log(computerSelection);

    console.log("Game Over");
  }
}

console.log(playRound(playerSelection, computerSelection));
