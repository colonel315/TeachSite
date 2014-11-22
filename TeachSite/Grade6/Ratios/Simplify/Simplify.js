/**
 * Created by Trey on 5/19/2014.
 */

/**
 * This code sets up to rows of Ratios, one unsimplified and one simplified. The user needs to match the unsimplified
 * to the simplified Ratio. If it is a match it will bring the two ratios next to one another in the middle
 */

/**
 * Animates the words to the middle of the screen side by side.
 * @param topValue top value needed to know the percentage of how far away to be from the top.
 * @param Ratio has the elemental selector needed to move which ratio
 * @param SimplifiedRatio has the elemental selector needed to move with simplified ratio
 * @constructor
 */
var Animation = function(topValue, Ratio, SimplifiedRatio) {
	Ratio.animate({
		"left": "40%",
		"top": topValue
	}, 1000);
	SimplifiedRatio.animate({
		"left": "50%",
		"top": topValue
	}, 1000);
};

/**
 * prints out "Try again" 40% from the left side
 * @param topValue Takes in a string value with a percentage that is how far from the top
 */
var gotWrong = function(topValue) {
	var Correct = $('#Correct');
	Correct.css('top', topValue);
	Correct.css('left', '40%');
	Correct.text("Try again!");
};
$(document).ready(function() {
	/**
	 * Creates an empty JSON structure to store questions into.
	 * @type {{}}
	 */
	var	Answers = {};

	/**
	 * Booleans Highlight1 and Highlight2 lets the program know whether or not a ratio is selected.
	 * @type {boolean}
	 */
	var Highlight1 = false;
	var Highlight2 = false;

	/**
	 * Keeps track of which ratio was selected
	 * @type {string}
	 */
	var seeIfCorrect1 = "";
	var seeIfCorrect2 = "";

	/**
	 * Keeps track of how many questions are correct
	 * @type {number}
	 */
	var amountCorrect = 0;

	/**
	 * Ratios 1-12 hold the jQuery selectors $('#Ratio1') through $('#Ratio12') for future use.
	 * @type {*|jQuery|HTMLElement}
	 */
	var Ratio1 = $('#Ratio1');
	var Ratio2 = $('#Ratio2');
	var Ratio3 = $('#Ratio3');
	var Ratio4 = $('#Ratio4');
	var Ratio5 = $('#Ratio5');
	var Ratio6 = $('#Ratio6');
	var Ratio7 = $('#Ratio7');
	var Ratio8 = $('#Ratio8');
	var Ratio9 = $('#Ratio9');
	var Ratio10 = $('#Ratio10');
	var Ratio11 = $('#Ratio11');
	var Ratio12 = $('#Ratio12');

	/**
	 * Creates the JSON structure to store the questions inside of Answers[i].Ratios and Answers[i].SimplifiedRatios
	 */
	var generateJSON = function() {
		for(var i = 0; i < 7; i++) {
			Answers[i] = [];
			Answers[i]["Ratios"] = "";
			Answers[i]["SimplifiedRatios"] = "";
		}

		var randomNumerator = "";
		var randomDenomenator = "";
		var Divider = "";

		for(i = 0; i < 6; i++) {
			randomNumerator = Math.floor(Math.random()*10)+1;
			randomDenomenator = Math.floor(Math.random()*10)+1;
			Divider = GreatestCommonFactor(randomNumerator, randomDenomenator);

			Answers[i].Ratios = randomNumerator+":"+randomDenomenator;
			Answers[i].SimplifiedRatios = randomNumerator/Divider+":"+randomDenomenator/Divider;
		}

		var tempRatios = [];
		var tempSimplifiedRatios = [];
		for(i = 0; i < 6; i++) {
			tempRatios[i] = Answers[i].Ratios;
			tempSimplifiedRatios[i] = Answers[i].SimplifiedRatios;
		}

		var randomNum = "";

		for(i = 1; i <= 6; i++) {
			randomNum = (Math.floor(Math.random()*tempRatios.length)+1)-1;

			$('#Ratio'+i).text(tempRatios[randomNum]);

			tempRatios.splice(randomNum, 1);
		}

		for(i = 7; i <= 12; i++) {
			randomNum = (Math.floor(Math.random()*tempSimplifiedRatios.length)+1)-1;

			$('#Ratio'+i).text(tempSimplifiedRatios[randomNum]);

			tempSimplifiedRatios.splice(randomNum, 1);
		}
	};

	/**
	 * Checks to see if answer is correct and if it is correct takes answers to the middle of page.
	 */
	var checkAnswer = function() {
		var temp = amountCorrect;
		var answers = "";
		var isCorrect = false;
		var Ratio = "";
		var SimplifiedRatio = "";
		Highlight1 = false;
		Highlight2 = false;
		var Correct = $('#Correct');

		for(var i = 0; i < 6; i++) {
			answers = Answers[i];
			if($(seeIfCorrect1).html() == answers.Ratios && $(seeIfCorrect2).html() == answers.SimplifiedRatios) {
				Ratio = seeIfCorrect1;
				SimplifiedRatio = seeIfCorrect2;
				amountCorrect++;
				isCorrect = true;
				break;
			}
			else if($(seeIfCorrect1).html() === answers.SimplifiedRatios && $(seeIfCorrect2).html() == answers.Ratios) {
				Ratio = seeIfCorrect2;
				SimplifiedRatio = seeIfCorrect1;
				amountCorrect++;
				isCorrect = true;
				break;
			}
		}

		if(isCorrect) {
			if(temp === 0) {
				Animation("40%", Ratio, SimplifiedRatio);
			}
			else if(temp === 1) {
				Animation("50%", Ratio, SimplifiedRatio);
			}
			else if(temp === 2) {
				Animation("60%", Ratio, SimplifiedRatio);
			}
			else if(temp === 3) {
				Animation("70%", Ratio, SimplifiedRatio);
			}
			else if(temp === 4) {
				Animation("80%", Ratio, SimplifiedRatio);
			}
			else if(temp === 5) {
				Animation("90%", Ratio, SimplifiedRatio);
			}

			if(amountCorrect === 6) {
				Correct.css('display', 'block');
				Correct.css('top', '23%');
				Correct.css('left', '30%');
				Correct.css('color', 'blue');
				Correct.text("Great job you answered them all!");
			}
		}
		else {
			var tempIfCorrect1 = seeIfCorrect1;
			var tempIfCorrect2 = seeIfCorrect2;
			setTimeout(function() {
				Correct.css('display', 'none');
				$(tempIfCorrect1).css('color', 'black');
				$(tempIfCorrect2).css('color', 'black');
			}, 1500);

			Correct.css('display', 'block');
			Correct.css('color', 'orange');
			if(temp === 0) {
				gotWrong("40%");
			}
			if(temp === 1) {
				gotWrong("50%");
			}
			if(temp === 2) {
				gotWrong("60%");
			}
			if(temp === 3) {
				gotWrong("70%");
			}
			if(temp === 4) {
				gotWrong("70%");
			}
			if(temp === 5) {
				gotWrong("90%");
			}

		}

		seeIfCorrect1 = "";
		seeIfCorrect2 = "";
	};

	//if Highlight1 and Highlight2 are true then it will call the function checkAnswer
	$('#body').on({
		click: function() {
			if(Highlight1 && Highlight2) {
				checkAnswer();
			}
		}
	});

	/*each of these when clicked will highlight blue, if one is already blue will transfer the blue to another ratio and make the previous
	selected ratio black.*/
	Ratio1.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio1.css("color", "blue");
			seeIfCorrect1 = Ratio1;
		}
	});
	Ratio2.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio2.css("color", "blue");
			seeIfCorrect1 = Ratio2;
		}
	});
	Ratio3.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio3.css("color", "blue");
			seeIfCorrect1 = Ratio3;
		}
	});
	Ratio4.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio4.css("color", "blue");
			seeIfCorrect1 = Ratio4;
		}
	});
	Ratio5.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio5.css("color", "blue");
			seeIfCorrect1 = Ratio5;
		}
	});
	Ratio6.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio6.css("color", "blue");
			seeIfCorrect1 = Ratio6;
		}
	});
	Ratio7.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio7.css("color", "blue");
			seeIfCorrect2 = Ratio7;
		}
	});
	Ratio8.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio8.css("color", "blue");
			seeIfCorrect2 = Ratio8;
		}
	});
	Ratio9.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio9.css("color", "blue");
			seeIfCorrect2 = Ratio9;
		}
	});
	Ratio10.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio10.css("color", "blue");
			seeIfCorrect2 = Ratio10;
		}
	});
	Ratio11.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio11.css("color", "blue");
			seeIfCorrect2 = Ratio11;
		}
	});
	Ratio12.on({
		click: function() {
			if(Highlight2) {
				$(seeIfCorrect2).css("color", "black");
			}
			else {
				Highlight2 = true;
			}
			Ratio12.css("color", "blue");
			seeIfCorrect2 = Ratio12;
		}
	});

	//generates the numbers
	generateJSON();
});