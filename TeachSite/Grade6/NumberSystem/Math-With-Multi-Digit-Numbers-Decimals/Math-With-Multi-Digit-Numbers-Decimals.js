/**
 * Created by Trey on 10/7/2014.
 */
/**
 * Creates problem in the middle of the screen that creates two numbers that have decimal values (to the hundredth place) for the student to solve
 * using the standard algorithm
 */

var setUpFormat = function(top1, top2, top3, top4, top5, left1, left2, left3, left4, left5, textVal) {
	var answer = $('#answer');
	var symbol = $('#symbol');
	var bar = $('#bar');
	var number1 = $('#number1');
	var number2 = $('#number2');

	answer.css('position', 'absolute').css('top', top1).css('left', left1);
	symbol.css('position', 'absolute').css('top', top2).css('left', left2);
	symbol.text(textVal);
	bar.css('position', 'absolute').css('top', top3).css('left', left3);
	number1.css('position', 'absolute').css('top', top4).css('left', left4);
	number2.css('position', 'absolute').css('top', top5).css('left', left5);
};
$(document).ready(function() {
	//creates an empty JSON structure
	var ArithmeticProblem = {};

	//keeps track of the current question
	var CurrentQuestion = 0;

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
			randomNumber1 = math.round(math.random(1, 10), 1);
			randomNumber2 = math.round(math.random(10, 100), 2);

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
		var usersAns = $('#usersAns');
		var table = $('#table');
		var symbol = $('#symbol');

		switch(ArithmeticProblem[CurrentQuestion].Operation) {
			case "/":
				if(ArithmeticProblem[CurrentQuestion].Number1%1 == 0) {
					table.css('display', 'none');
					usersAns.css('font-size', '40').css('left', '42%').css('top', '34%').css('width', '100px').css('height', '60px');
				}
				setUpFormat('35%', '43%', '29%', '47%', '47%', '42%', '38%', '40%', '32%', '42%', '/');

				break;
			case "*":
				table.css('display', 'none');
				symbol.css('font-size', '45px');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');
				setUpFormat('63%', '53%', '45%', '52%', '43%', '42%', '36%', '39%', '44%', '42%', 'x');

				break;
			case "+":
				table.css('display', 'none');
				symbol.css('font-size', '45px');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');
				setUpFormat('63%', '53%', '45%', '52%', '43%', '42%', '36%', '39%', '44%', '42%', '+');

				break;
			case "-":
				table.css('display', 'none');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');
				symbol.css('font-size', '45px');
				setUpFormat('63%', '53%', '45%', '52%', '43%', '42%', '36%', '39%', '44%', '42%', '-');

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