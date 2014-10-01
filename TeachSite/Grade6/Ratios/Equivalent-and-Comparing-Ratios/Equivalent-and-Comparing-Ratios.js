$(document).ready(function() {
	var Question = {}; //Creates JSON structure called JSON
	var currentQuestion = 0; //keeps track of the current question.
	var numberStorer1 = "";
	var numberStorer2 = "";

	//generates the JSON structure
	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
		}
		var randomNum1 = "";
		var randomNum2 = "";
		var randomNum3 = "";
		var randomNum4 = "";

		numberStorer1 = [[]];
		numberStorer2 = [[]];

		for(i = 0; i < 10; i++) {
			randomNum1 = Math.floor(Math.random() * 50) + 1;
			randomNum2 = Math.floor(Math.random() * 50) + 1;
			randomNum3 = Math.floor(Math.random() * 50) + 1;
			randomNum4 = Math.floor(Math.random() * 50) + 1;

			numberStorer1[i] = [randomNum1, randomNum2];
			numberStorer2[i] = [randomNum3, randomNum4];
		}
		Question[0].prompt = numberStorer1[0][0]+":"+numberStorer1[0][1]+" and "+numberStorer2[0][0]+"/"+numberStorer2[0][1];

		Question[1].prompt = numberStorer1[1][0]+":"+numberStorer1[1][1]+" and "+numberStorer2[1][0]+":"+numberStorer2[1][1];

		Question[2].prompt = numberStorer1[2][0]+":"+numberStorer1[2][1]+" and "+numberStorer2[2][0]+":"+numberStorer2[2][1];

		Question[3].prompt = numberStorer1[3][0]+":"+numberStorer1[3][1]+" and "+numberStorer2[3][0]+":"+numberStorer2[3][1];

		Question[4].prompt = numberStorer1[4][0]+":"+numberStorer1[4][1]+" and "+numberStorer2[4][0]+":"+numberStorer2[4][1];

		Question[5].prompt = "Amanda uses "+numberStorer1[5][0]+"ibs of wheat for every "+numberStorer1[5][1]+" loaves of bread while " +
							"Greg uses "+numberStorer2[5][0]+"ibs of wheat for every "+numberStorer2[5][1]+" loaves of bread. " +
							"Who uses more wheat per bread?";

		Question[6].prompt = "Seth drank "+numberStorer1[6][0]+"ozs of water in "+numberStorer1[6][1]+" minutes. " +
							"Doug drank "+numberStorer2[6][0]+"ozs of water in "+numberStorer2[6][1]+" minutes. " +
							"Who drank more water in a shorter amount of time?";

		Question[7].prompt = "Shaggy used "+numberStorer1[7][0]+"ozs of flour to make "+numberStorer1[7][1]+" Scooby snacks. " +
							"Scooby uses "+numberStorer2[7][0]+"ozs of flour to make "+numberStorer2[7][1]+" Scooby snacks. " +
							"Who uses more flour per Scooby snack.";

		Question[8].prompt = "Jennifer's hallway uses "+numberStorer1[8][0]+" light bulbs for every "+numberStorer1[8][1]+" yards. " +
							"Nancy's hallway uses "+numberStorer2[8][0]+" light bulbs for every "+numberStorer2[8][1]+" yards. " +
							"Whose hallway uses more light bulbs per yard?";

		Question[9].prompt = "Meggie made "+numberStorer1[9][1]+" cookies by using "+numberStorer1[9][0]+"ibs of flour. " +
							"Mr. Burr uses "+numberStorer2[9][0]+"ibs of flour to make "+numberStorer2[9][1]+" cookies. " +
							"Who uses more flour per cookie?";
	};

	generateJSON();
	$('#Question').text(Question[0].prompt);

	var checkAnswer = function(keyCode) {
		var gotCorrect = false;
		if(numberStorer1[currentQuestion][0]/numberStorer1[currentQuestion][1] < numberStorer2[currentQuestion][0]/numberStorer2[currentQuestion][1] &&
			keyCode === 37) {
			gotCorrect = true;
		}
		else if(numberStorer1[currentQuestion][0]/numberStorer1[currentQuestion][1] > numberStorer2[currentQuestion][0]/numberStorer2[currentQuestion][1] &&
			keyCode === 39) {
			gotCorrect = true;
		}
		else if(numberStorer1[currentQuestion][0]/numberStorer1[currentQuestion][1] == numberStorer2[currentQuestion][0]/numberStorer2[currentQuestion][1] &&
			keyCode === 40) {
			gotCorrect = true;
		}

		Correct = $('#Correct');

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
			$('#Correct').css('left', '0px');
			$('.center').css("left", "0px");
		}
	};

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