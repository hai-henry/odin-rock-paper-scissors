// Gets computer choice
function getComputerChoice() {
	// Create an array of choices
	const choices = ["rock", "paper", "scissors"];
	// Generate a random number between 0 and 2
	const randomNumber = Math.floor(Math.random() * 3);
	// Return the choice at the index of the random number
	return choices[randomNumber];
}
