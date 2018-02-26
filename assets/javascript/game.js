$(document).ready(function() {

    // Variables //
    
	var gem1value, gem2value, gem3value, gem4value;
	var wins = 0;
	var losses = 0;
	var randomNumber;
	var userScore;


    // Functions //
    
	// initialize the variables for each new game
	function initializeVariables() {
		// computer picks a number between 19 and 120
		randomNumber = 19 + Math.floor(Math.random() * 102);
		// assign random values for crystals between 1 and 12
	 	gem1value = 1 + Math.floor(Math.random() * 12);
		gem2value = 1 + Math.floor(Math.random() * 12);
		gem3value = 1 + Math.floor(Math.random() * 12);
		gem4value = 1 + Math.floor(Math.random() * 12);
		// reset value of user's score to 0
		userScore = 0;
		// update the html 
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomNumber);
		$("#userScore").html(userScore);
		consoleLogVariables();
	}

	// determine if user has won or lost
	// add to wins/losses tally
	function winLose() {
		// check if user has lost
		if (userScore > randomNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		// check if user has won
		if (userScore == randomNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	// debugging function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log(gem1value, "gem1value + ", gem2value, "+ gem2value + ", gem3value, "+ gem3value + ", gem4value, "+ gem4value");
		console.log("randomNumber: " + randomNumber + " userScore: " + userScore);

	}


	initializeVariables();
	// on click function for crystals
	$(".gem").on("click", function() {
		// identify which crystal the user clicked 
		var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the crystal to the user's score tally
        if (pressed == "gem1") {
        	userScore += gem1value;
        } else if (pressed == "gem2") {
        	userScore += gem2value;
        } else if (pressed == "gem3") {
        	userScore += gem3value;
        } else if (pressed == "gem4") {
        	userScore += gem4value;
        } else {
        	console.log("error");
        }
        // update the html for the user score
        $("#userScore").html(userScore);
        consoleLogVariables();
        // call the function to see if user has won or lost
        winLose();
	});
});