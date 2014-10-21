/**
 * Drag and drop method that has the Ratio on right side, and simplified (if possible) fractions on the right side.
 * Students will drag answers into middle and program will check to see if they are equal.
 */

/**
 * Compares to see if RatioSpot and FractionSpots are in the correct place.
 * @param RatioFractionSpot
 * @param DropSpot
 * @returns {boolean}
 * @constructor
 */
var Comparison = function(RatioFractionSpot, DropSpot) {
	return parseInt(RatioFractionSpot.css('left'), 10) >= parseInt(DropSpot.css('left'), 10)-10 &&
			parseInt(RatioFractionSpot.css('left'), 10) <= parseInt(DropSpot.css('left'), 10)+parseInt(DropSpot.css('width'), 10) &&
			parseInt(RatioFractionSpot.css('top'), 10) >= parseInt(DropSpot.css('top'), 10)-10 &&
			parseInt(RatioFractionSpot.css('top'), 10) <= parseInt(DropSpot.css('top'), 10)+parseInt(DropSpot.css('height'), 10);
};
$(document).ready(function() {
	/**
	 * Constructs an empty JSON structure called answer to store questions inside of
	 * @type {{}}
	 */
	var Answers = {};

	/**
	 * Keeps track of the ammount the user got correct
	 * @type {number}
	 */
	var amountCorrect = 0;

	/**
	 * empty variables for later use
	 * @type {string}
	 */
	var RatioSpot1 = "";
	var RatioSpot2 = "";
	var RatioSpot3 = "";
	var RatioSpot4 = "";
	var RatioSpot5 = "";
	var RatioSpot6 = "";

	var FractionSpot1 = "";
	var FractionSpot2 = "";
	var FractionSpot3 = "";
	var FractionSpot4 = "";
	var FractionSpot5 = "";
	var FractionSpot6 = "";

	/**
	 * Generates a JSON constructor.
	 */
	var generateJSON = function() {
		for(var i = 0; i < 6; i++) {
			Answers[i] = [];
			Answers[i]["Ratios"] = "";
			Answers[i]["Fractions"] = "";
		}

		var randomNumerator = "";
		var randomDenomenator = "";
		var Divider = "";

		for(i = 0; i < 6; i++) {
			randomNumerator = Math.floor(Math.random()*50)+1;
			randomDenomenator = Math.floor(Math.random()*50)+1;
			Divider = GreatestCommonFactor(randomNumerator, randomDenomenator);

			Answers[i].Ratios = randomNumerator+":"+randomDenomenator;
			Answers[i].Fractions = randomNumerator/Divider+"/"+randomDenomenator/Divider;
		}

		var tempRatios = [];
		var tempFractions = [];
		for(i = 0; i < 6; i++) {
			tempRatios[i] = Answers[i].Ratios;
			tempFractions[i] = Answers[i].Fractions;
		}

		var randomNum = "";

		for(i = 1; i <= 6; i++) {
			randomNum = (Math.floor(Math.random()*tempRatios.length)+1)-1;

			$('#RatioSpot'+i).text(tempRatios[randomNum]);

			tempRatios.splice(randomNum, 1);
		}

		for(i = 1; i <= 6; i++) {
			randomNum = (Math.floor(Math.random()*tempFractions.length)+1)-1;

			$('#FractionSpot'+i).text(tempFractions[randomNum]);

			tempFractions.splice(randomNum, 1);
		}
	};

	/**
	 * Checks to see if all of the answers are correct.
	 * If all correct will pull up alert box that tells student that they are all correct.
	 * If at least one wrong will reset position of elements and then tell student they had something wrong.
	 */
	var checkAnswer = function() {
		var Ratios = "";
		var Fractions = "";
		for(var i = 0; i < 6; i++) {
			for(var j = 1; j <= 6; j++) {
				Ratios = $('#RatioSpot' + j);
				if(Ratios.html() == Answers[i].Ratios) {
					break;
				}
			}

			for(j = 1; j <= 6; j++) {
				Fractions = $('#FractionSpot'+j);
				if(Fractions.html() == Answers[i].Fractions) {
					break;
				}
			}

			for(j = 1; j <= 11; j+=2) {
				if(Ratios.html() == Answers[i].Ratios && Fractions.html() == Answers[i].Fractions &&
					Comparison(Ratios, $('#Drop-Spot'+j)) && Comparison(Fractions, $('#Drop-Spot'+(j+1)))) {
					amountCorrect++;
				}
			}
		}

		var Correct = $('#Correct');

		if(amountCorrect === 6) {
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.text("You got them all correct!");
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);

			Correct.css('display', 'block');
			Correct.css('color', 'orange');
			Correct.text("You got something wrong, try again");
			Reset();
		}
	};

	/**
	 * Constructs draggable and droppable objects
	 */
	$(function() {
		RatioSpot1 = $('#RatioSpot1');
		RatioSpot2 = $('#RatioSpot2');
		RatioSpot3 = $('#RatioSpot3');
		RatioSpot4 = $('#RatioSpot4');
		RatioSpot5 = $('#RatioSpot5');
		RatioSpot6 = $('#RatioSpot6');
		FractionSpot1 = $('#FractionSpot1');
		FractionSpot2 = $('#FractionSpot2');
		FractionSpot3 = $('#FractionSpot3');
		FractionSpot4 = $('#FractionSpot4');
		FractionSpot5 = $('#FractionSpot5');
		FractionSpot6 = $('#FractionSpot6');
		var DropSpot1 = $('#Drop-Spot1');
		var DropSpot2 = $('#Drop-Spot2');
		var DropSpot3 = $('#Drop-Spot3');
		var DropSpot4 = $('#Drop-Spot4');
		var DropSpot5 = $('#Drop-Spot5');
		var DropSpot6 = $('#Drop-Spot6');
		var DropSpot7 = $('#Drop-Spot7');
		var DropSpot8 = $('#Drop-Spot8');
		var DropSpot9 = $('#Drop-Spot9');
		var DropSpot10 = $('#Drop-Spot10');
		var DropSpot11 = $('#Drop-Spot11');
		var DropSpot12 = $('#Drop-Spot12');

		RatioSpot1.draggable({
			revert: 'invalid'
		});

		RatioSpot2.draggable({
			revert: 'invalid'
		});

		RatioSpot3.draggable({
			revert: 'invalid'
		});

		RatioSpot4.draggable({
			revert: 'invalid'
		});

		RatioSpot5.draggable({
			revert: 'invalid'
		});

		RatioSpot6.draggable({
			revert: 'invalid'
		});

		FractionSpot1.draggable({
			revert: 'invalid'
		});

		FractionSpot2.draggable({
			revert: 'invalid'
		});

		FractionSpot3.draggable({
			revert: 'invalid'
		});

		FractionSpot4.draggable({
			revert: 'invalid'
		});

		FractionSpot5.draggable({
			revert: 'invalid'
		});

		FractionSpot6.draggable({
			revert: 'invalid'
		});

		DropSpot1.droppable();
		DropSpot2.droppable();
		DropSpot3.droppable();
		DropSpot4.droppable();
		DropSpot5.droppable();
		DropSpot6.droppable();
		DropSpot7.droppable();
		DropSpot8.droppable();
		DropSpot9.droppable();
		DropSpot10.droppable();
		DropSpot11.droppable();
		DropSpot12.droppable();
	});

	/**
	 * This resets the position of answers
	 * @constructor
	 */
	var Reset = function() {
		//resets the answers to their original spots
		RatioSpot1.css('top', '30%').css('left', '17%');
		RatioSpot2.css('top', '40%').css('left', '17%');
		RatioSpot3.css('top', '50%').css('left', '17%');
		RatioSpot4.css('top', '60%').css('left', '17%');
		RatioSpot5.css('top', '70%').css('left', '17%');
		RatioSpot6.css('top', '80%').css('left', '17%');

		FractionSpot1.css('top', '30%').css('left', '70%');
		FractionSpot2.css('top', '40%').css('left', '70%');
		FractionSpot3.css('top', '50%').css('left', '70%');
		FractionSpot4.css('top', '60%').css('left', '70%');
		FractionSpot5.css('top', '70%').css('left', '70%');
		FractionSpot6.css('top', '80%').css('left', '70%');
	};

	$(document).on( {
		click: function() {
			checkAnswer();
		}
	}, "#Answer");
	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13) {
			checkAnswer();
		}
	});
	$(document).on({
		click: function() {
			Reset();
		}
	}, "#Reset");
	generateJSON();
});