/**
 * Created by Trey on 9/28/2014.
 */
$(document).ready(function() {
	//creates a JSON structure
	var Divide = {};

	/**
	 * A simple divisor option
	 * @type {string}
	 */
	var DivisorLine = {
		text: "________",
		position: {
			top: "",
			bottom: "",
			left: "",
			right: ""
		},
		setPosition: function(type, value){
			self.position[type] = parseFloat(value);
		}
	};

	//stores the answer
	var Answer = "";

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
					Quotient.text(Quotient.html()+HighestDivide(Divide[currentQuestion].Divisor, Divide[currentQuestion].Dividend));

					usersAns.css('top', '43%');

					document.getElementById('usersAns').value = "";

					step++;
				}
				break;
			case 2:
				if(usersAns.val() == Quotient.html()*Divide[currentQuestion].Divisor) {
//					divisorLine = new DivisorLine;
					jQuery('<div/>', {
						css: {
							position: 'absolute',
							left: '34%',
							top: usersAns.css('top')
						},
						text: "________",
						class: 'subtraction-bar'
					})
						.appendTo('body');
//					var old_top_position = jQuery(".divisor-line")[-1].css('top');
//					var old_left_position = jQuery('.divisor-line')[-1].css('left');
					jQuery('<div/>', {
						css: {
							position: 'absolute',
							left: parseInt(usersAns.css('left'), 10)-(window.innerWidth * 0.03),
							top: usersAns.css('top')+'2%'
						},
						text: '-',
						class: "subtraction-sign"
					})
						.appendTo('body');
				}

				usersAns.css('top', usersAns.css('top')+'15%');
				break;
			case 3:
				break;
		}
	};

	//Big doo doo head
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