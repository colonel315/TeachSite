/**
 * Created by Trey on 10/7/2014.
 */
/**
 * Creates problem in the middle of the screen that creates two numbers that have decimal values (to the hundredth place) for the student to solve
 * using the standard algorithm
 */

/**
 * Clears out the text box and then increments cycle up by one
 *
 * @param Cycle
 * @returns {*}
 * @constructor
 */
var ClearTextBox_CycleAdd = function(Cycle) {
	document.getElementById('usersAns').value = "";

	Cycle++;
	return Cycle;
};
/**
 * used the same methods multiple times.
 *
 * top and left values indicate the top and left positions on the screen.
 * @param top1
 * @param top2
 * @param top3
 * @param top4
 * @param top5
 * @param left1
 * @param left2
 * @param left3
 * @param left4
 * @param left5
 */
var setUpFormat = function(top1, top2, top3, top4, top5, left1, left2, left3, left4, left5) {
	this.answer = $('#answer');
	this.symbol = $('#symbol');
	this.bar = $('#bar');
	this.number1 = $('#number1');
	this.number2 = $('#number2');

	this.answer.css('position', 'absolute').css('top', top1).css('left', left1);
	this.symbol.css('position', 'absolute').css('top', top2).css('left', left2);
	this.bar.css('position', 'absolute').css('top', top3).css('left', left3);
	this.number1.css('position', 'absolute').css('top', top4).css('left', left4);
	this.number2.css('position', 'absolute').css('top', top5).css('left', left5);
};
/**
 * This function creates a new html element when called.
 *
 * @param Element creates an html element like <div></div>
 * @param leftPosition where to place it horizonally on screen
 * @param topPosition where to place it vertically on screen
 * @param textVal what text is going to be printed on screen
 */
var createHTMLElement = function(Element, leftPosition, topPosition, textVal) {
	this.$(Element, {
		css: {
			position: 'absolute',
			left: leftPosition,
			top: topPosition
		},
		class: 'clearable',
		text: textVal
	})
		.appendTo('body');
};
$(document).ready(function() {
	//creates an empty JSON structure
	var ArithmeticProblem = {};

	//keeps track of the current question
	var CurrentQuestion = 0;

	//Cycle tells what part to do next
	var Cycle = 0;

	//Keeps track of users answer
	var Answer = "";

	//keeps up with the subtract value, add value
	var Value = "";

	//Keeps previous attributes of usersAns
	var usersAns = $('#usersAns');
	var usersAnsLeft = usersAns.css('left');
	var usersAnsTop = usersAns.css('top');

	//keeps the div, mult, sub, add problems
	var divProblemKeeper = [[]];
	var multProblemKeeper = [[]];
	var subProblemKeeper = [[]];
	var addProblemKeeper = [[]];

	//lets program know when to do switch statement
	var doSwitch = false;

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
				divProblemKeeper[i] = [ArithmeticProblem[i].Number1, ArithmeticProblem[i].Number2];
			}
			else if(i < 4) {
				ArithmeticProblem[i].Operation = "*";
				multProblemKeeper[i] = [ArithmeticProblem[i].Number1, ArithmeticProblem[i].Number2];
			}
			else if(i < 6) {
				ArithmeticProblem[i].Operation = "+";
				addProblemKeeper[i] = [ArithmeticProblem[i].Number1, ArithmeticProblem[i].Number2];
			}
			else {
				ArithmeticProblem[i].Operation = "-";
				subProblemKeeper[i] = [ArithmeticProblem[i].Number1, ArithmeticProblem[i].Number2];
			}
		}
	};

	/**
	 * displays whether the students got the part correct or not
	 * @param correct
	 */
	gotCorrect = function(correct) {
		var Correct = $('#correct');

		if(correct) {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.text("You got it correct!")
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);
			Correct.css('display', 'block');
			Correct.css('color', 'orange');
			Correct.text("Try again.");
		}
	};

	/**
	 * formats the page accordingly to the operation.
	 */
	var formatProblem = function() {
		var table = $('#table');
		var symbol = $('#symbol');
		var Number2 = $('#number2');

		switch(ArithmeticProblem[CurrentQuestion].Operation) {
			case "/":
				if(ArithmeticProblem[CurrentQuestion].Number1%1 == 0) {
					$('.second-column').css('display', 'none');
					$('#first-column-name').text("Original Number");
					Number2.css('display', 'none');
					usersAns.css('left', '42%').css('top', '49%');
					divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1].toString();
					divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1].replace(".", "");
					divProblemKeeper[CurrentQuestion][1] = parseInt(divProblemKeeper[CurrentQuestion][1]);
					Cycle = 2;
				}
				setUpFormat('35%', '43%', '29%', '47%', '47%', '42%', '38%', '40%', '32%', '42%');
				symbol.text('/');
				break;
			case "*":case "+":case"-":
				table.css('display', 'none');
				symbol.css('font-size', '45px');
				usersAns.css('position', 'absolute').css('top', '63%').css('left', '50%').css('width', '40px');
				setUpFormat('63%', '53%', '45%', '52%', '43%', '42%', '36%', '39%', '44%', '42%');

				if(ArithmeticProblem[CurrentQuestion].Operation == "*") {
					symbol.text('x');
				}
				else if(ArithmeticProblem[CurrentQuestion].Operation == "+") {
					symbol.text('+');
				}
				else {
					symbol.text('-');
				}

				break;
		}
	};

	generateJSON();
	$('#number1').text(ArithmeticProblem[CurrentQuestion].Number1);
	$('#numberTable1').text(ArithmeticProblem[CurrentQuestion].Number1);
	$('#number2').text(ArithmeticProblem[CurrentQuestion].Number2);
	$('#numberTable2').text(ArithmeticProblem[CurrentQuestion].Number2);
	formatProblem();

	/**
	 * checks the users answer to make sure that it is correct every step of the way
	 */
	var checkAnswer = function() {
		var table = $('#table');
		var usersAnsVal = usersAns.val();
		var number1 = $('#number1');
		var number2 = $('#number2');
		var answer = $('#answer');

		switch(ArithmeticProblem[CurrentQuestion].Operation) {
			case '/':
				if(!doSwitch) {
					if(usersAnsVal == divProblemKeeper[CurrentQuestion][0]*10 && Cycle === 0) {
						createHTMLElement('<div/>', usersAns.css('left'), (parseInt(usersAns.css('top'), 10) - window.innerHeight * 0.02), usersAnsVal);
						usersAns.css('top', '56%');
						divProblemKeeper[CurrentQuestion][0] *= 10;
						gotCorrect(true);
						Cycle = ClearTextBox_CycleAdd(Cycle);
					}
					else if(usersAnsVal == math.round(divProblemKeeper[CurrentQuestion][1]*10, 1) && Cycle === 1) {
						createHTMLElement('<div/>', usersAns.css('left'), (parseInt(usersAns.css('top'), 10) - window.innerHeight * 0.02), usersAnsVal);
						number2.css('display', 'none');
						usersAns.css('left', '42%').css('top', '49%');
						divProblemKeeper[CurrentQuestion][1] = math.round(divProblemKeeper[CurrentQuestion][1]*10, 1);
						divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1].toString();
						divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1].replace(".", "");
						divProblemKeeper[CurrentQuestion][1] = parseInt(divProblemKeeper[CurrentQuestion][1]);
						console.log("divProblemKeeper[CurrentQuestion][1] = ", divProblemKeeper[CurrentQuestion][1]);
						gotCorrect(true);
						Cycle = ClearTextBox_CycleAdd(Cycle);
					}
					else if(usersAnsVal == divProblemKeeper[CurrentQuestion][1] && Cycle == 2) {
						number2.css('display', 'block').text(usersAnsVal);
						usersAns.css('left', '28%');
						number1.css('display', 'none');
						gotCorrect(true);
						divProblemKeeper[CurrentQuestion][0] = divProblemKeeper[CurrentQuestion][0].toString();
						divProblemKeeper[CurrentQuestion][0] = divProblemKeeper[CurrentQuestion][0].replace(".", "");
						divProblemKeeper[CurrentQuestion][0] = parseInt(divProblemKeeper[CurrentQuestion][0]);
						Cycle = ClearTextBox_CycleAdd(Cycle);
					}
					else if(usersAnsVal == divProblemKeeper[CurrentQuestion][0] && Cycle == 3) {
						document.getElementById('usersAns').value = "";
						number1.css('display', 'block').text(usersAnsVal);
						usersAns.css('left', '42%').css('top', '39%');
						usersAnsTop = usersAns.css('top');
						usersAnsLeft = usersAns.css('left');
						gotCorrect(true);
						doSwitch = true;
						Cycle = 0;
						return;
					}
					else {
						gotCorrect(false);
					}
				}
				if(doSwitch) {
					switch(Cycle % 3) {
						case 0:
							console.log("usersAnsVal = ", usersAnsVal);
							console.log("HighestDivide(divProblemKeeper[CurrentQuestion][0], divProblemKeeper[CurrentQuestion][1]) = ", HighestDivide(divProblemKeeper[CurrentQuestion][0], divProblemKeeper[CurrentQuestion][1]));
							if(usersAnsVal == HighestDivide(divProblemKeeper[CurrentQuestion][0], divProblemKeeper[CurrentQuestion][1])) {
								answer.text(answer.html() + HighestDivide(divProblemKeeper[CurrentQuestion][0], divProblemKeeper[CurrentQuestion][1]));

								Answer = usersAnsVal;

								if(Cycle === 0) {
									usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * 0.2));
								}
								else {
									usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * 0.25));
								}
								usersAns.css('left', usersAnsLeft);

								gotCorrect(true);

								Cycle = ClearTextBox_CycleAdd(Cycle);
							}
							else {
								gotCorrect(false);
							}
							break;
						case 1:
							if(usersAnsVal == Answer * divProblemKeeper[CurrentQuestion][0]) {
								$('<div/>', {
									css: {
										position: 'absolute',
										left: '34%',
										top: parseInt(usersAns.css('top')) + (window.innerHeight * 0.03)
									},
									text: "________",
									class: 'clearable'
								})
									.appendTo('body');

								$('<div/>', {
									css: {
										position: 'absolute',
										left: parseInt(usersAns.css('left'), 10) - (window.innerWidth * 0.03),
										top: parseInt(usersAns.css('top')) + (window.innerHeight * 0.01)
									},
									text: '-',
									class: 'clearable'
								})
									.appendTo('body');

								$('<div/>', {
									css: {
										position: 'absolute',
										left: usersAns.css('left'),
										top: usersAns.css('top')
									},
									text: usersAns.val(),
									class: 'clearable'
								})
									.appendTo('body');

								gotCorrect(true);

								Value = usersAnsVal;
								usersAnsLeft = usersAns.css('left');
								usersAnsTop = usersAns.css('top');

								usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * .15));
								Cycle = ClearTextBox_CycleAdd(Cycle);
							}
							else {
								gotCorrect(false);
							}
							break;
						case 2:
							console.log("divProblemKeeper[CurrentQuestion][1] = ", divProblemKeeper[CurrentQuestion][1]);
							console.log("Value = ", Value);
							console.log("SubtractDividend(divProblemKeeper[CurrentQuestion][1], Value) = ", SubtractDividend(divProblemKeeper[CurrentQuestion][1], Value));
							if(usersAnsVal == SubtractDividend(divProblemKeeper[CurrentQuestion][1], Value)) {
								var lastDividend = "";
								var newLastDividend = "";

								if(divProblemKeeper[CurrentQuestion][1] >= 1000 || Value >= 100) {
									console.log("Inside if divProblemKeeper[CurrentQuestion][1] >= 1000 && Value >= 100");
									lastDividend = grabLastDividend(divProblemKeeper[CurrentQuestion][1], 2);

									divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1] - Value * 100;

									console.log("divProblemKeeper[CurrentQuestion][1] = ", divProblemKeeper[CurrentQuestion][1]);
									newLastDividend = grabLastDividend(divProblemKeeper[CurrentQuestion][1], 2);
								}
								else {
									console.log("inside else divProblemKeeper[CurrentQuestion][1] >= 1000 && Value >= 100");
									lastDividend = grabLastDividend(divProblemKeeper[CurrentQuestion][1], 1);

									divProblemKeeper[CurrentQuestion][1] = divProblemKeeper[CurrentQuestion][1] - Value * 10;

									console.log("divProblemKeeper[CurrentQuestion][1] = ", divProblemKeeper[CurrentQuestion][1]);
									newLastDividend = grabLastDividend(divProblemKeeper[CurrentQuestion][1], 1);
								}
								console.log("lastDividend = ", lastDividend);
								console.log("newLastDividend = ", newLastDividend);
								if(divProblemKeeper[CurrentQuestion][1] >= 100 || newLastDividend === lastDividend) {
									console.log("In if statement");
									$('<div/>', {
										css: {
											position: 'absolute',
											left: usersAns.css('left'),
											top: usersAns.css('top')
										},
										text: usersAns.val() + lastDividend,
										class: 'clearable'
									})
										.appendTo('body');
								}
								else {
									$('<div/>', {
										css: {
											position: 'absolute',
											left: usersAns.css('left'),
											top: usersAns.css('top')
										},
										text: usersAns.val(),
										class: 'clearable'
									})
										.appendTo('body');
								}

								gotCorrect(true);

								usersAns.css('top', '39%');
								usersAns.css('left', parseInt(usersAns.css('left')) + (window.innerWidth * .03));
								Cycle = ClearTextBox_CycleAdd(Cycle);
							}
							else {
								gotCorrect(false);
							}
							break;
					}

//					if(divProblemKeeper[CurrentQuestion][1] <= divProblemKeeper[CurrentQuestion][0]) {
//						if(parseInt(answer.html())*10 <= divProblemKeeper[CurrentQuestion][0]) {
//							answer.text(answer.html()+0);
//						}
//						usersAns.css('display', 'none');
//
//						gotCorrect(true);
//
//						setTimeout(function() {
//							$('.clearable').empty();
//							answer.empty();
//							ArithmeticProblem.newQuestion();
//						}, 4000);
//
//						CurrentQuestion++;
//					}
				}
		}
	};

	ArithmeticProblem["newQuestion"] = function() {
		$('#number1').text(ArithmeticProblem[CurrentQuestion].Number1);
		$('#number2').text(ArithmeticProblem[CurrentQuestion].Number2);
		if(ArithmeticProblem[CurrentQuestion].Operation == '/') {
			$('#numberTable1').text(ArithmeticProblem[CurrentQuestion].Number1);
			$('#numberTable2').text(ArithmeticProblem[CurrentQuestion].Number2);
		}
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