$(document).ready(function() {
	var Question = {};			//constructs an empty JSON structor for questions
	var Description = {};       //constructs and empty JSON structor for descriptions
	var AmountCorrect = 0;
	var Question1 = false;
	var Question2 = false;
	var Question3 = false;
	var Question4 = false;
	var Question5 = false;
	var Question6 = false;
	var Question7 = false;
	var Question8 = false;
	var Question9 = false;
	var Question10 = false;

	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
			Question[i]["answer"] = "";
		}
		for(var j = 0; j < 3; j++) {
			Description[j] = [];
			Description["prompt"] = "";
		}

		Description[0].prompt = "";

		Question[0].prompt = "?";
		Question[0].answer = "";

		Question[1].prompt = "?";
		Question[1].answer = "";

		Question[2].prompt = "?";
		Question[2].answer = "";

		Description[1].prompt = "";

		Question[3].prompt = "?";
		Question[3].answer = "";

		Question[4].prompt = "?";
		Question[4].answer = "";

		Question[5].prompt = "?";
		Question[5].answer = "";

		Description[2].prompt = "";

		Question[6].prompt = "?";
		Question[6].answer = "";

		Question[7].prompt = "?";
		Question[7].answer = "";

		Question[8].prompt = "?";
		Question[8].answer = "";

		Question[9].prompt = "?";
		Question[9].answer = "";
	};

	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			var UsersAnswer = "";

			UsersAnswer = $('#userAns'+i).val(); //Changing the i into a string so that way I don't have to have many a if statements

			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.toString();

			var RealAnswer = Question[i-1].answer;
			RealAnswer = RealAnswer.toString();

			var DisplayCorrect = "";

			if(UsersAnswer === RealAnswer) {
				if(i == 1) {
					Question1 = true;
				}
				else if(i == 2) {
					Question2 = true;
				}
				else if(i == 3) {
					Question3 = true;
				}
				else if(i == 4) {
					Question4 = true;
				}
				else if(i == 5) {
					Question5 = true;
				}
				else if(i == 6) {
					Question6 = true;
				}
				else if(i == 7) {
					Question7 = true;
				}
				else if(i == 8) {
					Question8 = true;
				}
				else if(i == 9) {
					Question9 = true;
				}
				else if(i == 10) {
					Question10 = true;
				}

				AmountCorrect++;

				DisplayCorrect = $('#correct'+i);
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "green");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("You got this right!");
			}
			else {
				DisplayCorrect = $('#correct'+i);
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "blue");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("Try again, you got it wrong.");
			}
			Question.NewQuestion();
		}
	};

	Question["NewQuestion"] = function() {

	};

	generateJSON();
	$("#FirstDescription").text(Description[0].prompt);
	$("#FirstQuestion").text(Question[0].prompt);
	$("#SecondQuestion").text(Question[1].prompt);
	$("#ThirdQuestion").text(Question[2].prompt);
	$("#SecondDescription").text(Description[1].prompt);
	$("#FourthQuestion").text(Question[3].prompt);
	$("#FifthQuestion").text(Question[4].prompt);
	$("#SixthQuestion").text(Question[5].prompt);
	$("#ThirdDescription").text(Description[2].prompt);
	$("#SeventhQuestion").text(Question[6].prompt);
	$("#EigthQuestion").text(Question[7].prompt);
	$("#NinthQuestion").text(Question[8].prompt);
	$("#TenthQuestion").text(Question[9].prompt);

	$(document).on({
		click: function() {
			checkAnswer();
		}
	}, "#check");

	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13) {
			checkAnswer();
		}
	});
});