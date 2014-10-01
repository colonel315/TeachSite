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

	//keeps track of the current question
	var currentQuestion = 0;

	//Keeps up with the step the division is on (DMS, divide, multiply, subtract)
	var step = 1;

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
		var usersAns = $('#usersAns');
		var Quotient = $('#Quotient');
		switch(step%3) {
			case 1:
				if(usersAns.val() == HighestDivide(Divide[currentQuestion].Divisor, Divide[currentQuestion].Dividend)) {
					Quotient.css('display', 'block');

					Quotient.text(Quotient.html()+HighestDivide(Divide[currentQuestion].Divisor, Divide[currentQuestion].Dividend));

					usersAns.css('top', '43%');

					step = ClearTextBox_StepAdd(step);
				}
				break;
			case 2:
				if(usersAns.val() == Quotient.html()*Divide[currentQuestion].Divisor) {
					$('<div/>', {
						css: {
							position: 'absolute',
							left: '34%',
							top: parseInt(usersAns.css('top'))+(window.innerHeight * 0.03)
						},
						text: "________",
						class: 'subtraction-bar'
					})
						.appendTo('body');

					$('<div/>', {
						css: {
							position: 'absolute',
							left: parseInt(usersAns.css('left'), 10)-(window.innerWidth * 0.03),
							top: parseInt(usersAns.css('top'))+(window.innerHeight * 0.01)
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
				}


				usersAns.css('top', parseInt(usersAns.css('top'))+(window.innerHeight * .15));

				step = ClearTextBox_StepAdd(step);
				break;
			case 3:
				break;
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