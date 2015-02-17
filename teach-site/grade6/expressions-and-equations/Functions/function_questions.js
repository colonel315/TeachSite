/**
 * Created by Trey on 2/2/2015.
 */

var FunctionQuestion = {};

FunctionQuestion.Utilities = {
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

FunctionQuestion.Questions = function() {
	//  generates a random multiple for the X column of the table
	this._randomMultipleX = 0;

	//  used for creating the functions inside of Y column of table
	this._randomCoeffecient = 0;
	this._randomConstant = 0;
};

$(document).ready(function() {
	FunctionQuestion.Questions = {
		createTable: function() {
			this._randomMultipleX = FunctionQuestion.Utilities.randomNumber(2, 5);

			this._randomCoeffecient = FunctionQuestion.Utilities.randomNumber(0, 4);
			this._randomConstant = FunctionQuestion.Utilities.randomNumber(0, 10);

			for(var i = 1; i <= 5; i++) {
				$('#x' + i).text(i * this._randomMultipleX);
				$('#y' + i).text((this._randomCoeffecient * i * this._randomMultipleX + this._randomConstant))
			}
		}
	};

	FunctionQuestion.Questions.createTable();
});