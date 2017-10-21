

var correct = 0;
var incorrect = 0;
var guessesLeft = 13;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";

// array of alphabet
var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];


var pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// Physic Choice 
	console.log(pyschicChoice);

}

// Function to Reset Game 
var resetGame = () => {
	guessesLeft = 13;
	guessesSoFar = [];
	pyschic();
};


document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();

	pyschic();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	

	var html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>varters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

	
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

var alertWin = () => {
	alert("Yay! I was thinking of " + pyschicChoice + ".");
	resetGame();
};

var alertLoss = () => {
	alert("Sorry! Maybe next time! My letter was " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};
