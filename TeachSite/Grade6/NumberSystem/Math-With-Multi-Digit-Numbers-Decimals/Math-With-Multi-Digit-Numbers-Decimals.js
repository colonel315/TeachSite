/**
 * Created by Trey on 10/7/2014.
 */
/**
 * Creates problem in the middle of the screen that creates two numbers that have decimal values (to the hundredth place) for the student to solve
 * using the standard algorithm
 */
$(document).ready(function() {
	//creates an empty JSON structure
	var ArithmeticProblem = {};

	//keeps track of the current question
	var CurrentQuestion = 6;

	/**
	 * This function creates questions and answers to the questions to print out and for the students to answer.
	 */
	var generateJSON = function() {
		for(var i = 0; i < 8; i++) {
			ArithmeticProblem[i] = [];
			ArithmeticProblem[i]["Number1"] = "";
			ArithmeticProblem[i]["Number2"] = "";
			ArithmeticProblem[i]["Operation"] = "";
		}

		var randomNumber1 = "";
		var randomNumber2 = "";

		for(i = 0; i < 8; i++) {
			randomNumber1 = Math.floor((Math.random() * 9) * 10)/10 + 1;
			randomNumber2 = Math.floor(((Math.random() * 90) * 100))/100 + 10;

			ArithmeticProblem[i].Number1 = randomNumber1;
			ArithmeticProblem[i].Number2 = randomNumber2;

			if(i < 2) {
				ArithmeticProblem[i].Operation = "/";
			}
			else if(i < 4) {
				ArithmeticProblem[i].Operation = "*";
			}
			else if(i < 6) {
				ArithmeticProblem[i].Operation = "+";
			}
			else {
				ArithmeticProblem[i].Operation = "-";
			}
		}
	};

	/**
	 * formats the page accordingly.
	 */
	var formatProblem = function() {
		var answer = $('#answer');
		var symbol = $('#symbol');
		var bar = $('#bar');
		var number1 = $('#number1');
		var number2 = $('#number2');
		var usersAns = $('#usersAns');
		var table = $('#table');

		switch(ArithmeticProblem[CurrentQuestion].Operation) {
			case "/":
				answer.css('position', 'absolute').css('top', '35%').css('left', '42%');
				symbol.css('position', 'absolute').css('top', '43%').css('left', '38%');
				symbol.text("/");
				bar.css('position', 'absolute').css('top', '29%').css('left', '40%');
				number1.css('position', 'absolute').css('top', '47%').css('left', '32%');
				number2.css('position', 'absolute').css('top', '47%').css('left', '42%');

				break;
			case "*":
				table.css('display', 'none');
				answer.css('position', 'absolute').css('top', '63%').css('left', '42%');
				symbol.css('position', 'absolute').css('top', '53%').css('left', '36%').css('font-size', '45px');
				symbol.text("x");
				bar.css('position', 'absolute').css('top', '45%').css('left', '39%');
				number1.css('position', 'absolute').css('top', '52%').css('left', '44%');
				number2.css('position', 'absolute').css('top', '43%').css('left', '42%');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');

				break;
			case "+":
				table.css('display', 'none');
				answer.css('position', 'absolute').css('top', '63%').css('left', '42%');
				symbol.css('position', 'absolute').css('top', '53%').css('left', '36%').css('font-size', '45px');
				symbol.text("+");
				bar.css('position', 'absolute').css('top', '45%').css('left', '39%');
				number1.css('position', 'absolute').css('top', '52%').css('left', '44%');
				number2.css('position', 'absolute').css('top', '43%').css('left', '42%');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');

				break;
			case "-":
				table.css('display', 'none');
				answer.css('position', 'absolute').css('top', '63%').css('left', '42%');
				symbol.css('position', 'absolute').css('top', '53%').css('left', '36%').css('font-size', '45px');
				symbol.text("-");
				bar.css('position', 'absolute').css('top', '45%').css('left', '39%');
				number1.css('position', 'absolute').css('top', '52%').css('left', '44%');
				number2.css('position', 'absolute').css('top', '43%').css('left', '42%');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');
				break;
		}
	};

	generateJSON();
	$('#number1').text(ArithmeticProblem[CurrentQuestion].Number1);
	$('#numberTable1').text(ArithmeticProblem[CurrentQuestion].Number1);
	$('#number2').text(ArithmeticProblem[CurrentQuestion].Number2);
	$('#numberTable2').text(ArithmeticProblem[CurrentQuestion].Number2);
	formatProblem();

	var checkAnswer = function() {

	};

	$(document).on({
		click: function() {
			checkAnswer();
		}
	}, "#Submit");
	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13) {
			checkAnswer();
		}
	});
});