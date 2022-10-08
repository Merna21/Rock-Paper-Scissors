let arr = ["Rock", "Paper", "Scissors"];

//computer choice func
function getComputerChoice(arr) {
  item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}

//enter user choice
const playerSelection = prompt("Enter your choice");

//the base func to get the winner
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log("You Win! Rock beats Paper");
    result = "true";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log("You Win! Rock beats Scissors");
    result = "true";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
    result = "false";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log("You Win! Scissors beats Paper");
    result = "true";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log("You Lose! Rock beats Paper");
    result = "false";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log("You Lose! Scissors beats Paper");
    result = "false";
  } else {
    console.log("Equality");
    result = "Equality";
  }
  return result;
}

//func that get 5 rounds of the game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let finalResult = "";
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice(arr);
    let result = playRound(playerSelection, computerSelection);
    if (result == "true") {
      playerScore++;
    } else if (result == "false") {
      computerScore++;
    }
  }
  console.log(
    "Your Score = " + playerScore,
    "Computer Score = " + computerScore
  );
  if (playerScore > computerScore) {
    return (finalResult = "You Are The Winner");
  } else if (computerScore > playerScore) {
    return (finalResult = "You Lose!");
  } else finalResult = "Equality";
  return finalResult;
}

console.log(game());
