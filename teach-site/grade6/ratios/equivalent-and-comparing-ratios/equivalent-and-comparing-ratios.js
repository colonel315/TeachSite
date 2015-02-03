/**
 * This program creates an interactive program for comparison of ratios by the use of arrow keys.
 */
$(document).ready(function() {

	/**
	 * Creates a JSON structure called Question
	 * @type {{}} {} is the symbol for creating a JSOn structure
	 */
	var Question = {};

	/**
	 * Keeps track of the current question
	 * @type {number}
	 */
	var currentQuestion = 0;

	/**
	 * Stores the random numbers for the ratios
	 * @type {string}
	 */
	var RatiosStorer1 = "";
	var RatiosStorer2 = "";

	/**
	 * generates the JSON structure to be able to call the questions and the random numbers generated inside of the
	 * RatiosStorer.
	 */
	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
		}
		var randomNum1 = "";
		var randomNum2 = "";
		var randomNum3 = "";
		var randomNum4 = "";

		/**
		 * [[]] creates a 2 dimensional array to be able to contains both sides of the ratio.
		 * @type {*[]}
		 */
		RatiosStorer1 = [[]];
		RatiosStorer2 = [[]];

		/**
		 * generates random numbers to store into the 2 dimensional arrays RatiosStorer1 and RatiosStorer2
		 */
		for(i = 0; i < 10; i++) {
			randomNum1 = Math.floor(Math.random() * 50) + 1;
			randomNum2 = Math.floor(Math.random() * 50) + 1;
			randomNum3 = Math.floor(Math.random() * 50) + 1;
			randomNum4 = Math.floor(Math.random() * 50) + 1;

			RatiosStorer1[i] = [randomNum1, randomNum2];
			RatiosStorer2[i] = [randomNum3, randomNum4];
		}
		Question[0].prompt = RatiosStorer1[0][0] + ":" + RatiosStorer1[0][1] + " and " + RatiosStorer2[0][0] + "/" + RatiosStorer2[0][1];

		Question[1].prompt = RatiosStorer1[1][0] + ":" + RatiosStorer1[1][1] + " and " + RatiosStorer2[1][0] + ":" + RatiosStorer2[1][1];

		Question[2].prompt = RatiosStorer1[2][0] + ":" + RatiosStorer1[2][1] + " and " + RatiosStorer2[2][0] + ":" + RatiosStorer2[2][1];

		Question[3].prompt = RatiosStorer1[3][0] + ":" + RatiosStorer1[3][1] + " and " + RatiosStorer2[3][0] + ":" + RatiosStorer2[3][1];

		Question[4].prompt = RatiosStorer1[4][0] + ":" + RatiosStorer1[4][1] + " and " + RatiosStorer2[4][0] + ":" + RatiosStorer2[4][1];

		Question[5].prompt = "Amanda uses " + RatiosStorer1[5][0] + "ibs of wheat for every " + RatiosStorer1[5][1] + " loaves of bread while " +
		"Greg uses " + RatiosStorer2[5][0] + "ibs of wheat for every " + RatiosStorer2[5][1] + " loaves of bread. " +
		"Who uses more wheat per bread?";

		Question[6].prompt = "Seth drank " + RatiosStorer1[6][0] + "ozs of water in " + RatiosStorer1[6][1] + " minutes. " +
		"Doug drank " + RatiosStorer2[6][0] + "ozs of water in " + RatiosStorer2[6][1] + " minutes. " +
		"Who drank more water in a shorter amount of time?";

		Question[7].prompt = "Shaggy used " + RatiosStorer1[7][0] + "ozs of flour to make " + RatiosStorer1[7][1] + " Scooby snacks. " +
		"Scooby uses " + RatiosStorer2[7][0] + "ozs of flour to make " + RatiosStorer2[7][1] + " Scooby snacks. " +
		"Who uses more flour per Scooby snack.";

		Question[8].prompt = "Jennifer's hallway uses " + RatiosStorer1[8][0] + " light bulbs for every " + RatiosStorer1[8][1] + " yards. " +
		"Nancy's hallway uses " + RatiosStorer2[8][0] + " light bulbs for every " + RatiosStorer2[8][1] + " yards. " +
		"Whose hallway uses more light bulbs per yard?";

		Question[9].prompt = "Meggie made " + RatiosStorer1[9][1] + " cookies by using " + RatiosStorer1[9][0] + "ibs of flour. " +
		"Mr. Burr uses " + RatiosStorer2[9][0] + "ibs of flour to make " + RatiosStorer2[9][1] + " cookies. " +
		"Who uses more flour per cookie?";
	};

	/**
	 * Calls the generateJSON function
	 */
	generateJSON();

	/**
	 * prints out the text from Question[0].prompt
	 */
	$('#Question').text(Question[0].prompt);

	/**
	 * checks the answer that user gives by the key code and to see if the division of
	 * RatiosStorer1[currentQuestion][0]/RatiosStorer1[currentQuestion][1] is < or > or ==
	 * RatiosStorer2[currentQuestion][0]/RatiosStorer2[currentQuestion][1]
	 * @param keyCode
	 */
	var checkAnswer = function(keyCode) {
		var gotCorrect = false;
		if(RatiosStorer1[currentQuestion][0] / RatiosStorer1[currentQuestion][1] < RatiosStorer2[currentQuestion][0] / RatiosStorer2[currentQuestion][1] &&
			keyCode === 37) {
			gotCorrect = true;
		}
		else if(RatiosStorer1[currentQuestion][0] / RatiosStorer1[currentQuestion][1] > RatiosStorer2[currentQuestion][0] / RatiosStorer2[currentQuestion][1] &&
			keyCode === 39) {
			gotCorrect = true;
		}
		else if(RatiosStorer1[currentQuestion][0] / RatiosStorer1[currentQuestion][1] == RatiosStorer2[currentQuestion][0] / RatiosStorer2[currentQuestion][1] &&
			keyCode === 40) {
			gotCorrect = true;
		}

		/**
		 * Stops repeated use of the same jQuery selector function.
		 * @type {*|jQuery|HTMLElement}
		 */
		var Correct = $('#Correct');

		/**
		 * checks to see if the user got the correct answer, if so adds 1 to currentQuestion and displays whether they
		 * got it correct or not. If user has not answered all of the questions then will change the question.
		 */
		if(gotCorrect) {
			currentQuestion++;
			if(currentQuestion === 10) {
				Correct.css('display', 'block');
				Correct.text("Great job you solved all of the problems!");
				return;
			}
			else {
				$('#Question').text(Question[currentQuestion].prompt);
			}
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);
			Correct.css('display', 'block');
			Correct.text("Try again.");
		}

		if(currentQuestion === 5) {
			$('#Question').css("left", "0px").css("font-size", "30px");
			Correct.css('left', '0px');
			$('.center').css("left", "0px");
		}
	};

	/**
	 * detects answer by the use of the arrow keys. -> is greaater than <- is less than and ^ is equal to
	 */
	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 37) {
			checkAnswer(37);
		}
		else if(event.keyCode == 39) {
			checkAnswer(39);
		}
		else if(event.keyCode == 40) {
			checkAnswer(40);
		}
	});
});