/**
 * Created by Trey on 2/18/2015.
 */

var Expression = {};

Expression.Utilities = {
	/**
	 * generates a random number from min to max inclusive
	 * @param min
	 * @param max
	 * @returns {number}
	 */
	randomNumber: function(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
};

Expression.Question = function() {
	//  will hold expressions
	this._expressions = null;

	//  how many terms in expression
	this._terms = 0;

	//  will say if expression is a monomial
	this._isMonomial = null;

	//  will hold a coeffecient
	this._coeffecient = 0;

	//  will hold the variable for the coeffecient
	this._variable = null;

	//  will hold the question, 0: monomial, 1: how many terms, 2: coeffecient
	this._question = null;
	this._questionType = 0;
};
Expression.Question = {
	createPage: function() {
		this._expressions = this.createExpression();
		this._question = this.createQuestion();

		$('#question').html(this._question);
		$('#expression').html(this._expressions);
	},

	createExpression: function() {
		var expression = '';
		this._terms = 0;
		var variableLetter = ['x', 'y', 'z', 'm', 'n'];

		var randomCoeffecient = Expression.Utilities.randomNumber(-5, 5);
		var randomExponent = Expression.Utilities.randomNumber(2, 5);
		var randomVariable = Expression.Utilities.randomNumber(0, variableLetter.length-1);

		var decideVariable = Expression.Utilities.randomNumber(0, 1);   //  if 0 will have variable
		var decideExponent = Expression.Utilities.randomNumber(0, 1);   //  if 0 will have exponent

		for(var i = 0; i < Expression.Utilities.randomNumber(1, 5); i++) {
			if(expression === '') {
				if(decideExponent === 0) {
					if(randomCoeffecient === 1) {
						expression = variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
					}
					else if(randomCoeffecient === -1) {
						expression = '-' + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
					}
					else if(randomCoeffecient < -1 || randomCoeffecient > 1) {
						expression = randomCoeffecient + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
					}
				}
				else {
					if(randomCoeffecient === 1) {
						expression = variableLetter[randomVariable];
					}
					else if(randomCoeffecient === -1) {
						expression = '-' + variableLetter[randomVariable];
					}
					else if(randomCoeffecient > 1) {
						expression = randomCoeffecient + variableLetter[randomVariable];
					}
					else if(randomCoeffecient < -1) {
						expression = randomCoeffecient + variableLetter[randomVariable];
					}
				}

				this._coeffecient = randomCoeffecient;
				this._variable = variableLetter[randomVariable];
				variableLetter.splice(randomVariable, 1);
			}
			else {
				if(decideVariable === 0) {
					if(decideExponent === 0) {
						if(randomCoeffecient === 1) {
							expression += ' + ' + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
						}
						else if(randomCoeffecient === -1) {
							expression += ' - ' + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
						}
						else if(randomCoeffecient > 1) {
							expression += ' + ' + randomCoeffecient + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
						}
						else if(randomCoeffecient < -1) {
							expression += ' - ' + -randomCoeffecient + variableLetter[randomVariable] + "<sup>" + randomExponent + "</sup>";
						}
					}
					else {
						if(randomCoeffecient === 1) {
							expression += ' + ' + variableLetter[randomVariable];
						}
						else if(randomCoeffecient === -1) {
							expression += ' - ' + variableLetter[randomVariable];
						}
						else if(randomCoeffecient > 1) {
							expression += ' + ' + randomCoeffecient + variableLetter[randomVariable];
						}
						else if(randomCoeffecient < -1) {
							expression += ' - ' + -randomCoeffecient + variableLetter[randomVariable];
						}
					}
				}
				else {
					if(randomCoeffecient >= 1) {
						expression += ' + ' + randomCoeffecient;
					}
					else if(randomCoeffecient <= -1) {
						expression += ' - ' + -randomCoeffecient;
					}
				}
			}

			randomCoeffecient = Expression.Utilities.randomNumber(-5, 5);
			randomExponent = Expression.Utilities.randomNumber(2, 5);
			randomVariable = Expression.Utilities.randomNumber(0, variableLetter.length - 1);
			decideVariable = Expression.Utilities.randomNumber(0, 1);   //  if 0 will have variable
			decideExponent = Expression.Utilities.randomNumber(0, 1);   //  if 0 will have exponent
			this._terms++;
		}

		if(expression === '') {
			expression = variableLetter[randomVariable];
			this._terms = 1;
		}

		this._isMonomial = this._terms === 1;

		return expression;
	},

	createQuestion: function() {
		var question = '';

		this._questionType = Expression.Utilities.randomNumber(0, 2);

		if(this._questionType === 0) {
			question = 'Is the following expression a monomial? (answer "yes" or "no")';
		}
		else if(this._questionType === 1) {
			question = 'How many terms are in the following expression?';
		}
		else {
			question = 'What is the coeffecient of the variable ' + this._variable;
		}

		return question;
	},

	checkAnswer: function() {
		var userAns = $('#userAns').val();
		userAns = userAns.replace(/\s/g, '');

		switch(this._questionType) {
			case 0:
				userAns = userAns.toLowerCase();
				userAns = userAns.charAt(0);

				if(userAns == 'y' && this._isMonomial) {
					this.gotCorrect(true);
				}
				else if(userAns == 'n' && !this._isMonomial) {
					this.gotCorrect(true);
				}
				else {
					this.gotCorrect(false);
				}

				break;
			case 1:
				if(userAns == this._terms) {
					this.gotCorrect(true);
				}
				else {
					this.gotCorrect(false);
				}

				break;
			case 2:
				if(userAns == this._coeffecient) {
					this.gotCorrect(true);
				}
				else {
					this.gotCorrect(false);
				}

				break;
		}

		this.createPage();
	},

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
	}
};

$(document).ready(function() {
	Expression.Question.createPage();

	/**
	 * calls the checkAnswer function by either clicking the button valued at "answer"
	 * or by hitting the enter key
	 */
	$(document).on({
		click: function() {
			Expression.Question.checkAnswer();
		}
	}, "#submit");

	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13) {
			Expression.Question.checkAnswer();
		}
	});
});