let playerScore = 0;
let computerScore = 0;
let draw = 0;

const container = document.querySelector(".body-content");
const resultsDiv = document.createElement("p");
const playerSelectionDiv = document.createElement("p");
const computerSelectionDiv = document.createElement("p");
const scoreDiv = document.createElement("p");

container.appendChild(scoreDiv);
container.appendChild(playerSelectionDiv);
container.appendChild(computerSelectionDiv);
container.appendChild(resultsDiv);

// play game using buttons
const selections = document.querySelectorAll(".selection");
selections.forEach((selection) => {
	selection.addEventListener("click", (e) => {
		playRound(e.target.id);
		runningScore(playerScore, computerScore, draw);
	});
});

// gets computer choices
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
	playerSelectionDiv.textContent =
		"You selected: " +
		playerSelection.charAt(0).toUpperCase() +
		playerSelection.slice(1);
	// generate computer choice
	let computerSelection = getComputerChoice();
	computerSelectionDiv.textContent = "Computer selected: " + computerSelection;

	if (playerSelection.toUpperCase() === "ROCK") {
		if (computerSelection.toUpperCase() === "ROCK") {
			resultsDiv.textContent = "It's a Tie! Rock can not beat Rock";
			return (draw += 1);
		}
		if (computerSelection.toUpperCase() === "PAPER") {
			resultsDiv.textContent = "You Lose! Paper beats Rock";
			return (computerScore += 1);
		}
		if (computerSelection.toUpperCase() === "SCISSORS") {
			resultsDiv.textContent = "You Win! Rock beats Scissors";
			return (playerScore += 1);
		}
	} else if (playerSelection.toUpperCase() === "PAPER") {
		if (computerSelection.toUpperCase() === "ROCK") {
			resultsDiv.textContent = "You win! Paper beats Rock";
			return (playerScore += 1);
		}
		if (computerSelection.toUpperCase() === "PAPER") {
			resultsDiv.textContent = "It's a tie! Paper can not beat Paper";
			return (draw += 1);
		}
		if (computerSelection.toUpperCase() === "SCISSORS") {
			resultsDiv.textContent = "You lose! Scissors beats paper";
			return (computerScore += 1);
		}
	} else if (playerSelection.toUpperCase() === "SCISSORS") {
		if (computerSelection.toUpperCase() === "ROCK") {
			resultsDiv.textContent = "You lose! Rock beats Scissors";
			return (computerScore += 1);
		}
		if (computerSelection.toUpperCase() === "PAPER") {
			resultsDiv.textContent = "You Win! Scissors beats paper";
			return (playerScore += 1);
		}
		if (computerSelection.toUpperCase() === "SCISSORS") {
			resultsDiv.textContent = "It's a tie! Scissors can not beat Scissors";
			return (draw += 1);
		}
	}
}

function runningScore(playerScore, computerScore, draw) {
	scoreDiv.textContent =
		"Player: " + playerScore + " Computer: " + computerScore + " Draw: " + draw;
	results(playerScore, computerScore, draw);
}

// calculate the winner/loser
function results(playerScore, computerScore) {
	if (playerScore === 5) {
		alert("You win the game!");
	}
	if (computerScore === 5) {
		alert("You lose the game!");
	}
}
