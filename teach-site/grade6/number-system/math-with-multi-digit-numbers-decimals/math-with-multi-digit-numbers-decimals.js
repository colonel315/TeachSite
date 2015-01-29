/**
 * Created by Trey on 10/21/2014
 */
$(document).ready(function() {
	//JSON object that stores answers and questions
	var ArithmeticProblem = {};

	//Keeps track of how many divs there are so that user can click on the prime factor
	var divAmount = 1;

	var generateJSON = function() {
		for(var i = 0; i < 8; i++) {
			ArithmeticProblem[i] = [];
			ArithmeticProblem[i]["prompt"] = "";
			ArithmeticProblem[i]["answer"] = "";
		}

		var randomNum1 = "";
		var randomNum2 = "";

		for(i = 0; i < 8; i++) {
			randomNum1 = math.round(math.random(1, 10), 1);
			randomNum2 = math.round(math.random(10, 100), 2);

			if(i >= 6) {
				ArithmeticProblem[i].prompt = randomNum1+" ÷ "+randomNum2;
				ArithmeticProblem[i].answer = math.round(randomNum2/randomNum1, 2);
			}
			else if(i >= 4) {
				ArithmeticProblem[i].prompt = randomNum1+" x "+randomNum2;
				ArithmeticProblem[i].answer = math.round(randomNum2*randomNum1, 2);
			}
			else if(i >= 2) {
				ArithmeticProblem[i].prompt = randomNum1+" + "+randomNum2;
				ArithmeticProblem[i].answer = math.round(randomNum2+randomNum1, 2);
			}
			else {
				ArithmeticProblem[i].prompt = randomNum2+" - "+randomNum1;
				ArithmeticProblem[i].answer = math.round(randomNum2-randomNum1, 2);
			}
		}
	};

	var checkAnswer = function() {
		for(var i = 1; i <= 8; i++) {
			var DisplayCorrect = $('#correct'+i);

			if($('#userAns'+i).val() == ArithmeticProblem[i-1].answer) {
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "green");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("You got this right!");
			}
			else {
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "blue");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("Try again, you got it wrong.");
			}
		}
	};

	generateJSON();
	$('#problems1').text(ArithmeticProblem[0].prompt);
	$('#problems2').text(ArithmeticProblem[1].prompt);
	$('#problems3').text(ArithmeticProblem[2].prompt);
	$('#problems4').text(ArithmeticProblem[3].prompt);
	$('#problems5').text(ArithmeticProblem[4].prompt);
	$('#problems6').text(ArithmeticProblem[5].prompt);
	$('#problems7').text(ArithmeticProblem[6].prompt);
	$('#problems8').text(ArithmeticProblem[7].prompt);

	$(document).on({
		click: function() {
			checkAnswer();
		}
	}, "#Submit");
	document.addEventListener("keypress", function() {
		if(event.keyCode == 13) {
			checkAnswer();
		}
	});
});