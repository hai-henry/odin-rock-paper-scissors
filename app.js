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
function playRound(playerSelection, computerSelection) {
	// selection
	const rock = "ROCK";
	const paper = "PAPER";
	const scissors = "SCISSORS";

	if (playerSelection.toUpperCase() === rock) {
		if (computerSelection.toUpperCase() === rock) {
			return "It's a Tie! Rock can not beat Rock";
		}
		if (computerSelection.toUpperCase() === paper) {
			return "You Lose! Paper beats Rock";
		}
		if (computerSelection.toUpperCase() === scissors) {
			return "You Win! Rock beats Scissors";
		}
	} else if (playerSelection.toUpperCase() === paper) {
		if (computerSelection.toUpperCase() === rock) {
			return "You win! Paper beats Rock";
		}
		if (computerSelection.toUpperCase() === paper) {
			return "It's a tie! Paper can not beat Paper";
		}
		if (computerSelection.toUpperCase() === scissors) {
			return "You lose! Scissors beats paper";
		}
	} else if (playerSelection.toUpperCase() === scissors) {
		if (computerSelection.toUpperCase() === rock) {
			return "You lose! Rock beats Scissors";
		}
		if (computerSelection.toUpperCase() === paper) {
			return "You Win! Scissors beats paper";
		}
		if (computerSelection.toUpperCase() === scissors) {
			return "It's a tie! Scissors can not beat Scissors";
		}
	}
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
