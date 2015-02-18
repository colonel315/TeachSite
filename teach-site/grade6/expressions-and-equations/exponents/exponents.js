/**
 * Created by Trey on 1/29/2015.
 */
var Exponents = {};

Exponents.Utilities = {
	/**
	 * generates a random number
	 * @param min
	 * @param max
	 * @returns {number}
	 */
	randomNumber: function(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
};

Exponents.Fractions = function(numerator, denominator) {
	this._numerator = numerator;
	this._denominator = denominator;
};
Exponents.Fractions.prototype = {
	getNumerator: function() {
		return this._numerator;
	},

	getDenominator: function() {
		return this._denominator;
	}
};

Exponents.Questions = function() {
	//  contains random number
	this._randomBase = 0;

	//  contains how many of a random number there is
	this._exponent = 0;

	//  question types, 0: expression, 1: solve for variable, 2: solve, 3: solve decimal base, 4: solve fractional base
	this._questionType = 0;
};
Exponents.Questions = {
	/**
	 * generates questions
	 */
	generateQuestion: function() {
		this._questionType = Exponents.Utilities.randomNumber(0, 4);

		var question = $('#question');

		switch(this._questionType) {
			case 0:
				var expression = "";

				this._randomBase = Exponents.Utilities.randomNumber(2, 10);

				this._exponent = Exponents.Utilities.randomNumber(1, 5);

				for(var i = 0; i < this._exponent; i++) {
					if(i < this._exponent - 1) {
						expression += this._randomBase + " * ";
					}
					else {
						expression += this._randomBase;
					}

				}

				question.text("Express the following as an exponent: " + expression + " (Use ^ for exponents)");
				break;
			case 1:
				this._randomBase = Exponents.Utilities.randomNumber(2, 10);

				this._exponent = Exponents.Utilities.randomNumber(0, 5);

				question.html("Solve for x: " + this._randomBase + "<sup>" + this._exponent + "</sup> = x");
				break;
			case 2:
				this._randomBase = Exponents.Utilities.randomNumber(2, 10);

				this._exponent = Exponents.Utilities.randomNumber(0, 5);

				question.html("Solve: " + this._randomBase + "<sup>" + this._exponent + "</sup>");
				break;
			case 3:
				this._randomBase = Math.round((Math.random() * 100)) / 100;

				this._exponent = Exponents.Utilities.randomNumber(0, 3);

				question.html("Solve: " + this._randomBase + "<sup>" + this._exponent + "</sup> (Round to the nearest " +
				"hundredth.)");
				break;
			case 4:
				this._randomBase =  new Exponents.Fractions(Exponents.Utilities.randomNumber(1, 5), Exponents.Utilities.randomNumber(6, 10));

				this._exponent = Exponents.Utilities.randomNumber(0, 3);

				question.html("Solve: (" + this._randomBase.getNumerator() + "/" + this._randomBase.getDenominator() +
				") <sup>" + this._exponent + "</sup> (keep answer as a fraction.)");
				break;
		}
	},

	/**
	 * checks the answer the user input
	 */
	checkAnswer: function() {
		var userAns = $('#userAns').val();
		userAns = userAns.replace(/\s/g, "");
		userAns = userAns.toString();

		var gotCorrect;

		switch(this._questionType) {
			case 0:
				gotCorrect = userAns == this._randomBase + "^" + this._exponent;
				break;
			case 1:
			case 2:
				gotCorrect = userAns == Math.pow(this._randomBase, this._exponent);
				break;
			case 3:
				gotCorrect = userAns == Math.round(Math.pow(this._randomBase, this._exponent) * 100) / 100;
				break;
			case 4:
				gotCorrect = userAns == Math.pow(this._randomBase.getNumerator(), this._exponent) + "/" +
				Math.pow(this._randomBase.getDenominator(), this._exponent);
		}

		this.gotCorrect(gotCorrect);
	},

	/**
	 * displays success alert when user got it right
	 */
	gotCorrect: function(correct) {
		if(correct) {
			sweetAlert({
				title: "You did",
				text: "fantastic!",
				type: "success",
				timer: 3000
			});
		}
		else {
			sweetAlert({
				title: "Try again",
				text: "you will get it!",
				type: "error",
				timer: 3000
			});
		}

		setTimeout(function() {
			$(userAns).val("");
			Exponents.Questions._numberCount = 0;
			Exponents.Questions.generateQuestion();
		}, 3500);
	}
};

$(document).ready(function() {
	Exponents.Questions.generateQuestion();

	/**
	 * calls the checkAnswer function by either clicking the button valued at "answer"
	 * or by hitting the enter key
	 */
	$(document).on({
		click: function() {
			Exponents.Questions.checkAnswer();
		}
	}, "#submit");

	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13) {
			Exponents.Questions.checkAnswer();
		}
	});
});