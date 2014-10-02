/**
 * Created by Trey on 5/19/2014.
 */

/**
 * This code sets up to rows of Ratios, one unsimplified and one simplified. The user needs to match the unsimplified
 * to the simplified Ratio. If it is a match it will bring the two ratios next to one another in the middle
 */
$(document).ready(function() {
	var	Answers = {};
	var Highlight1 = false;
	var Highlight2 = false;
	var seeIfCorrect1 = "";
	var seeIfCorrect2 = "";
	var amountCorrect = 0;
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
				$(Ratio).animate({
					"left": "40%",
					"top": "40%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "40%"
				}, 1000);
			}
			else if(temp === 1) {
				$(Ratio).animate({
					"left": "40%",
					"top": "50%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "50%"
				}, 1000);
			}
			else if(temp === 2) {
				$(Ratio).animate({
					"left": "40%",
					"top": "60%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "60%"
				}, 1000);
			}
			else if(temp === 3) {
				$(Ratio).animate({
					"left": "40%",
					"top": "70%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "70%"
				}, 1000);
			}
			else if(temp === 4) {
				$(Ratio).animate({
					"left": "40%",
					"top": "80%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "80%"
				}, 1000);
			}
			else if(temp === 5) {
				$(Ratio).animate({
					"left": "40%",
					"top": "90%"
				}, 1000);
				$(SimplifiedRatio).animate({
					"left": "50%",
					"top": "90%"
				}, 1000);
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
			tempIfCorrect1 = seeIfCorrect1;
			tempIfCorrect2 = seeIfCorrect2;
			setTimeout(function() {
				Correct.css('display', 'none');
				$(tempIfCorrect1).css('color', 'black');
				$(tempIfCorrect2).css('color', 'black');
			}, 1500);

			Correct.css('display', 'block');
			Correct.css('color', 'orange');
			if(temp === 0) {
				Correct.css('top', '40%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}
			if(temp === 1) {
				Correct.css('top', '50%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}
			if(temp === 2) {
				Correct.css('top', '60%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}
			if(temp === 3) {
				Correct.css('top', '70%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}
			if(temp === 4) {
				Correct.css('top', '80%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}
			if(temp === 5) {
				Correct.css('top', '90%');
				Correct.css('left', '40%');
				Correct.text("Try again!");
			}

		}

		seeIfCorrect1 = "";
		seeIfCorrect2 = "";
	};

	$('#body').on({
		click: function() {
			if(Highlight1 && Highlight2) {
				checkAnswer();
			}
		}
	});
	Ratio1.on({
		click: function() {
			if(Highlight1) {
				$(seeIfCorrect1).css("color", "black");
			}
			else {
				Highlight1 = true;
			}
			Ratio1.css("color", "blue");
			seeIfCorrect1 = '#Ratio1'
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
			seeIfCorrect1 = '#Ratio2'
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
			seeIfCorrect1 = '#Ratio3'
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
			seeIfCorrect1 = '#Ratio4'
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
			seeIfCorrect1 = '#Ratio5'
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
			seeIfCorrect1 = '#Ratio6';
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
			seeIfCorrect2 = '#Ratio7'
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
			seeIfCorrect2 = '#Ratio8'
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
			seeIfCorrect2 = '#Ratio9'
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
			seeIfCorrect2 = '#Ratio10';
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
			seeIfCorrect2 = '#Ratio11';
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
			seeIfCorrect2 = '#Ratio12';
		}
	});

	generateJSON();
});