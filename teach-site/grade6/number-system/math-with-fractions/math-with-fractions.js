/**
 * Created by Trey on 8/20/2014.
 */

$(document).ready(function() {
	var Answers = {}; //constructs a JSON array.
	var currentQuestion = 0; //keeps track of the current question.
	var Answers1 = $('#Answers1');
	var Answers2 = $('#Answers2');
	var Answers3 = $('#Answers3');
	var Answers4 = $('#Answers4');
	var Correct = $('#Correct');
	var correctAnswer = "";

	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Answers[i] = [];
			Answers[i]["prompt"] = "";
			Answers[i]["Numerator"] = "";
			Answers[i]["Denomenator"] = "";
		}

		var Numerator1 = Math.floor(Math.random() * 50) + 1;
		var Denomenator1 = Math.floor(Math.random() * 50) + 1;

		Answers[0].prompt = "What is the reciprocal of " + Numerator1 + "/" + Denomenator1 + "?";
		Answers[0].Numerator = Denomenator1;
		Answers[0].Denomenator = Numerator1;

		var Constant1 = Math.floor(Math.random() * 5) + 1;
		Numerator1 = Math.floor(Math.random() * 10) + 1;
		Denomenator1 = Math.floor(Math.random() * 20) + 11;

		var Numerator2 = Math.floor(Math.random() * 10) + 1;
		var Denomenator2 = Math.floor(Math.random() * 20) + 11;

		Answers[1].prompt = Constant1 + "    " + Numerator1 + "/" + Denomenator1 + " ÷ " + Numerator2 + "/" + Denomenator2;
		Answers[1].Numerator = (Constant1 * Denomenator1 + Numerator1) * Denomenator2;
		Answers[1].Denomenator = Denomenator1 * Numerator2;

		Constant1 = Math.floor(Math.random() * 5) + 1;
		Numerator1 = Math.floor(Math.random() * 10) + 1;
		Denomenator1 = Math.floor(Math.random() * 50) + 11;

		Numerator2 = Math.floor(Math.random() * 10) + 1;
		Denomenator2 = Math.floor(Math.random() * 50) + 11;

		Answers[2].prompt = Numerator1 + "/" + Denomenator1 + " ÷ " + Constant1 + " " + Numerator2 + "/" + Denomenator2;
		Answers[2].Numerator = Numerator1 * Denomenator2;
		Answers[2].Denomenator = Denomenator1 * (Constant1 * Denomenator2 + Numerator2);

		Constant1 = Math.floor(Math.random() * 5) + 1;
		Numerator1 = Math.floor(Math.random() * 10) + 1;
		Denomenator1 = Math.floor(Math.random() * 50) + 11;

		var Constant2 = Math.floor(Math.random() * 5) + 1;
		Numerator2 = Math.floor(Math.random() * 10) + 1;
		Denomenator2 = Math.floor(Math.random() * 50) + 11;

		Answers[3].prompt = Constant1 + " " + Numerator1 + "/" + Denomenator1 + " ÷ " + Constant2 + " " + Numerator2 + "/" + Denomenator2;
		Answers[3].Numerator = (Constant1 * Denomenator1 + Numerator1) * Denomenator2;
		Answers[3].Denomenator = Denomenator1 + (Constant2 * Denomenator2 + Numerator2);

		Constant1 = Math.floor(Math.random() * 5) + 1;
		Numerator1 = Math.floor(Math.random() * 10) + 1;
		Denomenator1 = Math.floor(Math.random() * 50) + 11;

		Constant2 = Math.floor(Math.random() * 5) + 1;
		Numerator2 = Math.floor(Math.random() * 10) + 1;
		Denomenator2 = Math.floor(Math.random() * 50) + 11;

		Answers[4].prompt = "A tank holds " + Constant1 + " " + Numerator1 + "/" + Denomenator1 + " gallons of water. " +
		Constant2 + " " + Numerator2 + "/" + Denomenator2 + " tanks were used yesterday. " +
		"How many gallons of water were used?";
		Answers[4].Numerator = (Constant1 * Denomenator1 + Numerator1) * Denomenator2;
		Answers[4].Denomenator = Denomenator1 + (Constant2 * Denomenator2 + Numerator2);

		Constant1 = Math.floor(Math.random() * 5) + 1;
		Numerator1 = Math.floor(Math.random() * 10) + 1;
		Denomenator1 = Math.floor(Math.random() * 50) + 11;

		Constant2 = Math.floor(Math.random() * 5) + 1;
		Numerator2 = Math.floor(Math.random() * 10) + 1;
		Denomenator2 = Math.floor(Math.random() * 50) + 11;

		Answers[5].prompt = "A company uses " + Constant1 + " " + Numerator1 + "/" + Denomenator1 + "lbs of flour per batch of cookies." +
		"The company used " + Constant2 + " " + Numerator2 + "/" + Denomenator2 + " batches of cookies yesterday. " +
		"How many pounds of flour did the company use to make the cookies?";
		Answers[5].Numerator = (Constant1 * Denomenator1 + Numerator1) * Denomenator2;
		Answers[5].Denomenator = Denomenator1 + (Constant2 * Denomenator2 + Numerator2);
	};

	var ArrayShuffle = function() {
		var ElementArray = [$('#Answers1'), $('#Answers2'), $('#Answers3'), $('#Answers4')];
		var AnswersArray = [];

		AnswersArray[0] = Answers[currentQuestion].Numerator + "/" + Answers[currentQuestion].Denomenator;

		for(var i = 1; i < 4; i++) {
			randomNumerator = Math.floor(Math.random() * 5) + 1;
			randomDenomenator = Math.floor(Math.random() * 10) + 6;

			AnswersArray[i] = (Answers[currentQuestion].Numerator + randomNumerator) + "/" + (Answers[currentQuestion].Denomenator + randomDenomenator);
		}

		var randomAnswers = "";
		var randomElement = "";

		for(i = 0; i < 4; i++) {
			randomElement = (Math.floor(Math.random() * ElementArray.length) + 1) - 1;
			randomAnswers = (Math.floor(Math.random() * AnswersArray.length) + 1) - 1;

			ElementArray[randomElement].text(AnswersArray[randomAnswers]);

			ElementArray.splice(randomElement, 1);
			AnswersArray.splice(randomAnswers, 1);
		}
	};

	generateJSON();
	$('#Question').text(Answers[currentQuestion].prompt);
	ArrayShuffle();

	Answers["newQuestion"] = function() {
		currentQuestion++;

		if(currentQuestion === 6) {
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.css('background', 'orange');
			Correct.text('You got them all correct!');
		}
		else {
			setTimeout(function() {
				console.log(currentQuestion);
				$('#Question').text(Answers[currentQuestion].prompt);
				Correct.css('display', 'none');
				correctAnswer.css('color', 'black');
				ArrayShuffle();
			}, 2000);

			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.css('background', 'orange');
			Correct.text('You got it correct!');
		}
	};

	Answers1.on({
		click: function() {
			if(Answers1.html() == Answers[currentQuestion].Numerator + "/" + Answers[currentQuestion].Denomenator) {
				correctAnswer = Answers1;
				Answers.newQuestion();
			}
			else {
				setTimeout(function() {
					Correct.css('display', 'none');
					Answers1.css('color', 'black');
				}, 2000);
				Correct.css('display', 'block');
				Correct.css('color', 'orange');
				Correct.css('background', 'blue');
				Correct.text("Try again.");
			}
			Answers1.css('color', 'blue');
		}
	});
	Answers2.on({
		click: function() {
			if(Answers2.html() == Answers[currentQuestion].Numerator + "/" + Answers[currentQuestion].Denomenator) {
				correctAnswer = Answers2;
				Answers.newQuestion();
			}
			else {
				setTimeout(function() {
					Correct.css('display', 'none');
					Answers2.css('color', 'black');
				}, 2000);
				Correct.css('display', 'block');
				Correct.css('color', 'orange');
				Correct.css('background', 'blue');
				Correct.text("Try again.");
			}
			Answers2.css('color', 'blue');
		}
	});
	Answers3.on({
		click: function() {
			if(Answers3.html() == Answers[currentQuestion].Numerator + "/" + Answers[currentQuestion].Denomenator) {
				correctAnswer = Answers3;
				Answers.newQuestion();
			}
			else {
				setTimeout(function() {
					Correct.css('display', 'none');
					Answers3.css('color', 'black');
				}, 2000);
				Correct.css('display', 'block');
				Correct.css('color', 'orange');
				Correct.css('background', 'blue');
				Correct.text("Try again.");
			}
			Answers3.css('color', 'blue');
		}
	});
	Answers4.on({
		click: function() {
			if(Answers4.html() == Answers[currentQuestion].Numerator + "/" + Answers[currentQuestion].Denomenator) {
				correctAnswer = Answers4;
				Answers.newQuestion();
			}
			else {
				setTimeout(function() {
					Correct.css('display', 'none');
					Answers4.css('color', 'black');
				}, 2000);
				Correct.css('display', 'block');
				Correct.css('color', 'orange');
				Correct.css('background', 'blue');
				Correct.text("Try again.");
			}
			Answers4.css('color', 'blue');
		}
	});
});