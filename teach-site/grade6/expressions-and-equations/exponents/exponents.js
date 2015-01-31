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

Exponents.Questions = function() {
	//  contains random number
	this._randomNum = 0;

	//  contains how many of a random number there is
	this._exponent = 0;

	//  question types, 0: expression, 1: solve for variable, 2: solve
	this._questionType = 0;
};

$(document).ready(function() {
	Exponents.Questions = {
		/**
		 * generates questions
		 */
		generateQuestion: function() {
			this._questionType = 2;

			this._randomNum = Exponents.Utilities.randomNumber(2, 10);

			var question = $('#question');

			switch(this._questionType) {
				case 0:
					var expression = "";

					this._exponent = Exponents.Utilities.randomNumber(1, 5);

					for(var i = 0; i < this._exponent; i++) {
						if(i < this._exponent - 1) {
							expression += this._randomNum + " + ";
						}
						else {
							expression += this._randomNum;
						}

					}

					question.text("Express the following as an exponent: " + expression + " (Use ^ for exponents)");
					break;
				case 1:
					this._exponent = Exponents.Utilities.randomNumber(0, 5);

					question.html("Solve for x: " + this._randomNum + "<sup>" + this._exponent + "</sup> = x");
					break;
				case 2:
					this._exponent = Exponents.Utilities.randomNumber(0, 5);

					question.html("Solve: " + this._randomNum + "<sup>" + this._exponent + "</sup>");
					break;
			}
		},

		/**
		 * checks the answer the user input
		 */
		checkAnswer: function() {
			var userAns = $('#userAns');

			switch(this._questionType) {
				case 0:
					if(userAns.val() == this._randomNum + "^" + this._exponent) {
						this.gotCorrect(true);
					}
					else {
						this.gotCorrect(false);
					}
					break;
				case 1:
				case 2:
					if(userAns.val() == Math.pow(this._randomNum, this._exponent)) {
						this.gotCorrect(true);
					}
					else {
						this.gotCorrect(false);
					}
					break;
			}
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