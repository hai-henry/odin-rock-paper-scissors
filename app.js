let playerScore = 0;
let computerScore = 0;
let draw = 0;

let rock = document.querySelector("#btn1");
rock.addEventListener("click", () => {
	playRound("ROCK");
});
let paper = document.querySelector("#btn2");
paper.addEventListener("click", () => {
	playRound("PAPER");
});
let scissors = document.querySelector("#btn3");
scissors.addEventListener("click", () => {
	playRound("SCISSORS");
});

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
function playRound(selection) {
	// get user input
	let playerSelection = selection;
	console.log(playerSelection);
	// generate computer choice
	let computerSelection = getComputerChoice();
	console.log(computerSelection);

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
