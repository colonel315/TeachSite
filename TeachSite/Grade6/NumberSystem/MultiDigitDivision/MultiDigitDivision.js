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

	//Keeps users answer in quotient
	var QuotientKeeper = "";

	var generateJSON = function() {
		for(var i = 0; i < 5; i++) {
			Divide[i] = [];
			Divide[i]["Dividend"] = "";
			Divide[i]["Divisor"] = "";
		}
		var Divisor = Math.floor(Math.random()*90)+10;
		var Dividend = Math.floor(Math.random()*900)+100;

		Divide[0].Divisor = Divisor;
		Divide[0].Dividend = Dividend;

		Divide[1].Divisor = Divisor;
		Divide[1].Dividend = Dividend;

		Divide[2].Divisor = Divisor;
		Divide[2].Dividend = Dividend;

		Divide[3].Divisor = Divisor;
		Divide[3].Dividend = Dividend;

		Divide[4].Divisor = Divisor;
		Divide[4].Dividend = Dividend;
	};

	generateJSON();
	$('#Divisor').text(Divide[currentQuestion].Divisor);
	$('#Dividend').text(Divide[currentQuestion].Dividend);

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
					step = ClearTextBox_StepAdd(step);
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
						class: 'subtraction-bar'
					})
						.appendTo('body');

					$('<div/>', {
						css: {
							position: 'absolute',
							left: parseInt(usersAns.css('left'), 10) - (window.innerWidth * 0.03),
							top: parseInt(usersAns.css('top')) + (window.innerHeight * 0.01)
						},
						text: '-',
						class: "subtraction-sign"
					})
						.appendTo('body');

					$('<div/>', {
						css: {
							position: 'absolute',
							left: usersAns.css('left'),
							top: usersAns.css('top')
						},
						text: usersAns.val()
					})
						.appendTo('body');

					subtractValue = usersAns.val();
					usersAnsLeft = usersAns.css('left');
					usersAnsTop = usersAns.css('top');

					usersAns.css('top', parseInt(usersAnsTop) + (window.innerHeight * .15));
					step = ClearTextBox_StepAdd(step);
				}
				break;
			case 2:
				if(usersAns.val() == SubtractDividend(Divide[currentQuestion].Dividend, subtractValue)) {
					var lastDividend = grabLastDividend(Divide[currentQuestion].Dividend);

					Divide[currentQuestion].Dividend = Divide[currentQuestion].Dividend - subtractValue * 10;

					var newLastDividend = grabLastDividend(Divide[currentQuestion].Dividend);

					if(Divide[currentQuestion].Dividend >= 100 && newLastDividend === lastDividend) {
						console.log("inside if");
						$('<div/>', {
							css: {
								position: 'absolute',
								left: usersAns.css('left'),
								top: usersAns.css('top')
							},
							text: usersAns.val() + lastDividend
						})
							.appendTo('body');
					}
					else {
						console.log("inside else");
						console.log("usersAns.html() = ", usersAns.val());
						$('<div/>', {
							css: {
								position: 'absolute',
								left: usersAns.css('left'),
								top: usersAns.css('top')
							},
							text: usersAns.val()
						})
							.appendTo('body');
					}

					usersAns.css('top', '22%');
					usersAns.css('left', parseInt(usersAns.css('left')) + (window.innerWidth * .03));
					step = ClearTextBox_StepAdd(step);
				}
				break;
		}

		if(Divide[currentQuestion].Dividend < Divide[currentQuestion].Divisor) {
			if(parseInt(Quotient.html())*10 <= Divide[currentQuestion].Dividend) {
				Quotient.text(Quotient.html()+0);
			}
			usersAns.css('display', 'none');
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