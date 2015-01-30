/**
 * Created by Trey on 1/29/2015.
 */
$(document).ready(function() {
	var Exponents = {};

	Exponents.Questions = function() {
		//  contains random number
		this._randomNum = 0;

		//  contains how many of a random number there is
		this._numberCount = 0;

		//  question types, 0: expression, 1: solve for variable, 2: solve
		this._questionType = 0;
	};

	Exponents.Questions = {
		/**
		 * generates questions
		 */
		generateQuestion: function() {
			this._questionType = 0;

			switch(this._questionType) {
				case 0:
					var expression = "";

					this._randomNum = Exponents.Utilities.randomNumber(2, 10);

					var amountToRepeat = Exponents.Utilities.randomNumber(1, 5);

					for(var i = 0; i < amountToRepeat; i++) {
						if(i < amountToRepeat - 1) {
							expression += this._randomNum + " + ";
						}
						else {
							expression += this._randomNum;
						}
						this._numberCount++;
					}

					$('#question').text("Express the following as an exponent: " + expression);
					break;
				case 1:
					break;
				case 2:
					break;
			}
		},

		/**
		 * checks the answer the user inputed
		 */
		checkAnswer: function() {
			switch(this._questionType) {
				case 0:
					console.log("$('#userAns').val() = ", $('#userAns').val());
					console.log("this._randomNum+"^"+this._numberCount = ", this._randomNum+"^"+this._numberCount);
					if($('#userAns').val() == this._randomNum+"^"+this._numberCount) {
						console.log("inside of if");
						this.gotCorrect(true);
					}
					break;
				case 1:
					break;
				case 2:
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
					timer: 2000
				});
			}
			else {
				sweetAlert({
					title: "You did",
					text: "fantastic!",
					type: "error",
					timer: 2000
				});
			}

			this._numberCount = 0;
			this.generateQuestion();
		}
	};

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

	Exponents.Questions.generateQuestion();

	/**
	 * calls the checkAnswer function by either clicking the button valued at "answer"
	 * or by hitting the enter key
	 */
	$(document).on({
		click: function() {
			console.log("inside on click");
			Exponents.Questions.checkAnswer();
		}
	}, "#submit");

	document.addEventListener('keypress', function(event) {
		console.log("inside key event");
		if(event.keyCode == 13) {
			console.log("inside key event");
			Exponents.Questions.checkAnswer();
		}
	});
});
