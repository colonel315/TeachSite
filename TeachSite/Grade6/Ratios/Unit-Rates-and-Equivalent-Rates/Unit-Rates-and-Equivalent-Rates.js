/**
 * generates questions for the user to answer. Then when user answers and submits them the program tells the user
 * whether they are right or wrong.
 */
$(document).ready(function() {
	var QuestionFirstHalf = {};			//constructs an empty JSON structor for questions first half
	var QuestionSecondHalf = {};       //constructs and empty JSON structor for questions second half
	var Question = {};

	/**
	 * Generates questions and answers into the structure "Question," "QuestionFirstHalf," and "QuestionSecondHalf."
	 */
	var generateJSON = function() {
		for(var i = 0; i < 5; i++) {
			QuestionFirstHalf[i] = [];
			QuestionFirstHalf[i]["prompt"] = "";
		}
		for(i = 0; i < 3; i++) {
			QuestionSecondHalf[i] = [];
			QuestionSecondHalf[i]["prompt"] = "";
		}
		for(i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["answer"] = "";
		}
		for(i = 0; i < 5; i++) {
			if(i != 3) {
				Question[i]["otherAnswer"] = "";
			}
		}

		QuestionFirstHalf[0].prompt = "21 pages of Lord of the Ring in 3 days = ";
		QuestionSecondHalf[0].prompt = " pages per day.";
		Question[0].answer = "7";
		Question[0].otherAnswer = "seven";

		QuestionFirstHalf[1].prompt = "99 dollars from working in 11 hours = ";
		QuestionSecondHalf[1].prompt = " dollars per hour.";
		Question[1].answer = "9";
		Question[1].otherAnswer = "nine";

		QuestionFirstHalf[2].prompt = "35 missions in your game in 5 days = ";
		QuestionSecondHalf[2].prompt = " missions per day.";
		Question[2].answer = "7";
		Question[2].otherAnswer = "seven";

		QuestionFirstHalf[3].prompt = "You made 300 dollars over the course of 3 weeks. " +
									"After 5 weeks of working how much money will you make?";
		Question[3].answer = "500";

		QuestionFirstHalf[4].prompt = "Over the course of 3 weeks Mr. Burr assigned 12 assignment. " +
									"After 5 weeks how many assignments will Mr. Burr assign?";
		Question[4].answer = "20";
		Question[4].otherAnswer = "twenty";

		Question[5].answer = "20";

		Question[6].answer = "24";

		Question[7].answer = "5";

		Question[8].answer = "6";

		Question[9].answer = "5";
	};

	/**
	 * Checks the user answers to see if the user was correct or not and then displays whether they are right or wrong
	 */
	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			var UsersAnswer = $('#userAns'+i).val(); //Changing the i into a string so that way I don't have to have many a if statements
			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace("$", "");
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.toString();

			var DisplayCorrect = "";

			var RealAnswer = Question[i-1].answer;
			RealAnswer = RealAnswer.toString();
			RealAnswer = RealAnswer.toLowerCase();
			RealAnswer = RealAnswer.replace("$", "");
			RealAnswer = RealAnswer.replace(/\s/g, "");

			if(i-1 === 0 || i-1 === 1 || i-1 === 2 || i-1 === 4) {
				var otherRealAnswer = Question[i - 1].otherAnswer;
				otherRealAnswer = otherRealAnswer.toString();
				otherRealAnswer = otherRealAnswer.toLowerCase();
				otherRealAnswer = otherRealAnswer.replace("$", "");
				otherRealAnswer = otherRealAnswer.replace(/\s/g, "");
			}

			if(UsersAnswer === RealAnswer) {
				DisplayCorrect = $('#correct'+i);
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "green");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("You got this right!");
			}
			else if(UsersAnswer === otherRealAnswer) {
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
		}
	};

	generateJSON();
	$("#FirstQuestionFirstHalf").text(QuestionFirstHalf[0].prompt);
	$("#FirstQuestionSecondHalf").text(QuestionSecondHalf[0].prompt);
	$("#SecondQuestionFirstHalf").text(QuestionFirstHalf[1].prompt);
	$("#SecondQuestionSecondHalf").text(QuestionSecondHalf[1].prompt);
	$("#ThirdQuestionFirstHalf").text(QuestionFirstHalf[2].prompt);
	$("#ThirdQuestionSecondHalf").text(QuestionSecondHalf[2].prompt);
	$("#FourthQuestionFirstHalf").text(QuestionFirstHalf[3].prompt);
	$("#FifthQuestionFirstHalf").text(QuestionFirstHalf[4].prompt);

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