var ClearTextBox_StepAdd = function(step) {
	document.getElementById('usersAns').value = "";

	step++;
	return step;
};
/**
 * Created by Trey on 9/28/2014.
 */
$(document).ready(function() {
	//creates a JSON structure
	var Divide = {};

	//keeps up with the subtract value
	var subtractValue = "";

	//keeps track of the current question
	var currentQuestion = 0;

	//Keeps up with the step the division is on (DMS, divide, multiply, subtract)
	var step = 0;

	//Keeps previous attributes of usersAns
	var usersAns = $('#usersAns');
	var usersAnsLeft = usersAns.css('left');
	var usersAnsTop = usersAns.css('top');

	//need global for jquery selector $('#Correct')
	var Correct = $('#Correct');

	//Keeps users answer in quotient
	var QuotientKeeper = "";

	var generateJSON = function() {
		for(var i = 0; i < 5; i++) {
			Divide[i] = [];
			Divide[i]["Dividend"] = "";
			Divide[i]["Divisor"] = "";
		}
		var Divisor = "";
		var Dividend = "";

		for(i = 0; i < 5; i++) {
			Divisor = Math.floor(Math.random()*90)+10;
			Dividend = Math.floor(Math.random()*900)+100;

			Divide[i].Dividend = Dividend;
			Divide[i].Divisor = Divisor;
		}
	};

	generateJSON();
	$('#Divisor').text(Divide[currentQuestion].Divisor);
	$('#Dividend').text(Divide[currentQuestion].Dividend);

	/**
	 * displays whether the students got the part correct or not
	 * @param correct
	 */
	gotCorrect = function(correct) {
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

	var checkAnswer = function() {
		var Quotient = $('#Quotient');

		switch(step%3) {
			case 0:
				if(usersAns.val() == HighestDivide(Divide[currentQuestion].Divisor, Divide[currentQuestion].Dividend)) {
					Quotient.text(Quotient.html() + HighestDivide(Divide[currentQuestion].Divisor, Divide[currentQuestion].Dividend));

					QuotientKeeper = usersAns.val();

					if(step === 0) {
						usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * .2));
					}
					else {
						usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * .25));
					}
					usersAns.css('left', '34%');

					gotCorrect(true);

					step = ClearTextBox_StepAdd(step);
				}
				else {
				    gotCorrect(false);
				}
				break;
			case 1:
				if(usersAns.val() == QuotientKeeper * Divide[currentQuestion].Divisor) {
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

					subtractValue = usersAns.val();
					usersAnsLeft = usersAns.css('left');
					usersAnsTop = usersAns.css('top');

					usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * .15));
					step = ClearTextBox_StepAdd(step);
				}
				else {
					gotCorrect(false);
				}
				break;
			case 2:
				if(usersAns.val() == SubtractDividend(Divide[currentQuestion].Dividend, subtractValue)) {
					var lastDividend = grabLastDividend(Divide[currentQuestion].Dividend);

					Divide[currentQuestion].Dividend = Divide[currentQuestion].Dividend - subtractValue * 10;

					var newLastDividend = grabLastDividend(Divide[currentQuestion].Dividend);

					if(Divide[currentQuestion].Dividend >= 100 || newLastDividend === lastDividend) {
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

					usersAns.css('top', '22%');
					usersAns.css('left', parseInt(usersAns.css('left')) + (window.innerWidth * .03));
					step = ClearTextBox_StepAdd(step);
				}
				else {
					gotCorrect(false);
				}
				break;
		}

		if(Divide[currentQuestion].Dividend <= Divide[currentQuestion].Divisor) {
			if(parseInt(Quotient.html())*10 <= Divide[currentQuestion].Dividend) {
				Quotient.text(Quotient.html()+0);
			}
			usersAns.css('display', 'none');

			gotCorrect(true);

			if(currentQuestion === 4) {
				Correct.css('display', 'block');
				Correct.css('color', 'blue');
				Correct.text("You got them all correct!")
			}
			else {
				setTimeout(function() {
					$('.clearable').empty();
					Quotient.empty();
					Divide.newQuestion();
				}, 4000);
			}

			currentQuestion++;
		}
	};

	Divide['newQuestion'] = function() {
		$('#Divisor').text(Divide[currentQuestion].Divisor);
		$('#Dividend').text(Divide[currentQuestion].Dividend);

		usersAns.css('display', 'block');
		usersAns.css('left', '34%');
		usersAns.css('top', '22%');
		usersAnsLeft = usersAns.css('left');
		usersAnsTop = usersAns.css('top');
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