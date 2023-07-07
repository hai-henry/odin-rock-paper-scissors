let playerScore = 0;
let computerScore = 0;
let draw = 0;

console.log(game());
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
console.log("Draw: " + draw);
console.log(results(playerScore, computerScore));

// gets computer choice
function getComputerChoice() {
	// create an array of choices
	const choices = ["Rock", "Paper", "Scissors"];
	// generate a random number between 0 and 2
	const randomNum = Math.floor(Math.random() * 3);
	// return the choice at the index of the random number
	return choices[randomNum];
}

// plays round, compares selection
function playRound() {
	let playerSelection = prompt("What do you choose?");
	let computerSelection = getComputerChoice();
	// selection
	const rock = "ROCK";
	const paper = "PAPER";
	const scissors = "SCISSORS";

	if (playerSelection.toUpperCase() === rock) {
		if (computerSelection.toUpperCase() === rock) {
			console.log("It's a Tie! Rock can not beat Rock");
			return (draw += 1);
		}
		if (computerSelection.toUpperCase() === paper) {
			console.log("You Lose! Paper beats Rock");
			return (computerScore += 1);
		}
		if (computerSelection.toUpperCase() === scissors) {
			console.log("You Win! Rock beats Scissors");
			return (playerScore += 1);
		}
	} else if (playerSelection.toUpperCase() === paper) {
		if (computerSelection.toUpperCase() === rock) {
			console.log("You win! Paper beats Rock");
			return (playerScore += 1);
		}
		if (computerSelection.toUpperCase() === paper) {
			console.log("It's a tie! Paper can not beat Paper");
			return (draw += 1);
		}
		if (computerSelection.toUpperCase() === scissors) {
			console.log("You lose! Scissors beats paper");
			return (computerScore += 1);
		}
	} else if (playerSelection.toUpperCase() === scissors) {
		if (computerSelection.toUpperCase() === rock) {
			console.log("You lose! Rock beats Scissors");
			return (computerScore += 1);
		}
		if (computerSelection.toUpperCase() === paper) {
			console.log("You Win! Scissors beats paper");
			return (playerScore += 1);
		}
		if (computerSelection.toUpperCase() === scissors) {
			console.log("It's a tie! Scissors can not beat Scissors");
			return (draw += 1);
		}
	}
}

// function to play a 5 round game
function game() {
	for (let i = 0; i < 5; ++i) {
		playRound();
	}
}

// calculate the winner/loser
function results(playerScore, computerScore) {
	if (playerScore > computerScore) {
		return "You win!";
	} else {
		return "You lose!";
	}
}
