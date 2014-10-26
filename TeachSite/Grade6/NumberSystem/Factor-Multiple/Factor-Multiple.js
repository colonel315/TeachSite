/**
 * Created by Trey on 10/22/2014.
 */
/**
 * This function will test to see if the students have a grasp of factors, finding the GCF, and th LCM, all using prime factorization
 */
$(document).ready(function() {
	//stores single number to find factors
	var FactorNumbers = {};

	//Two dimensional array that stores for the GCF and LCM
	var Commons = {};

	//keeps track of the current question
	var currentQuestion = 0;

	//amount of made divs
	var amountOfDivs = 1;

	//keeps an array with all factors inside of it
	var RealAnswer1 = [];
	var RealAnswer2 = [];
	var userAnswers1 = [];
	var LeastCommonFactors = [];
	var userAnswerIndex1 = 0;

	var generateJSON = function() {
		for(var i = 0; i < 3; i++) {
			FactorNumbers[i] = [];
			FactorNumbers[i].Factor = "";
		}
		for(i = 3; i < 9; i++) {
			for(var j = 0; j < 2; j++) {
				Commons[i] = [[]];
				Commons[i][j] = "";
			}
		}

		for(i = 0; i < 3; i++) {
			FactorNumbers[i].Factor = math.floor(math.random(10, 50));
		}
		for(i = 3; i < 9; i++) {
			for(j = 0; j < 2; j++) {
				Commons[i][j] = math.floor(math.random(2, 20));
			}
		}
		console.log(Commons);
	};

	generateJSON();
	$('.Factor-Multiple1').text(FactorNumbers[currentQuestion].Factor);
	$('#Description').text("Find the factors of the following number.");
	RealAnswer1 = findFactors(FactorNumbers[currentQuestion].Factor);

	var CheckAnswer = function() {
		var AnswerBox1 = $('#AnswerBox1');
		var AnswerLeft = parseInt(AnswerBox1.css('left'), 10);
		var AnswerTop = parseInt(AnswerBox1.css('top'), 10);
		var Correct = $('#Correct');
		var Final_Answer = $('#Final-Answer');
		var Repeated = false;

		console.log("userAnswerIndex = ", userAnswerIndex1);
		if(currentQuestion <= 2 && isFactor(FactorNumbers[currentQuestion].Factor, AnswerBox1.val())) {
			for(var i = 1; i <= amountOfDivs; i++) {
				if(AnswerBox1.val() == $('#Factor' + i).html()) {
					Repeated = true;
				}
			}
			if(Repeated) {
				setTimeout(function() {
					Correct.css('display', 'none');
				}, 1000);
				Correct.css('color', 'orange').css('display', 'block').text("You have found that factor!");
				document.getElementById('AnswerBox1').value = "";
				return;
			}

			createHTMLElement('<div/>', AnswerLeft, AnswerTop, "Answer", "Factor" + amountOfDivs, AnswerBox1.val(), "");
			amountOfDivs++;
			AnswerBox1.css('top', AnswerTop + innerHeight * 0.06);
			userAnswers1[userAnswerIndex1] = AnswerBox1.val();
			userAnswerIndex1++;

			setTimeout(function() {
				Correct.css('display', 'none');
			}, 1000);
			Correct.css('color', 'blue').css('display', 'block').text("Great job!");
			document.getElementById('AnswerBox1').value = "";

			if(RealAnswer1.length === userAnswers1.length) {
				setTimeout(function() {
					Correct.css('display', 'none');
					newQuestion();
					for(i = 1; i <= amountOfDivs; i++) {
						$('#Factor'+i).remove();
					}
				}, 1000);
				userAnswerIndex1 = 0;
				amountOfDivs = 1;
				while(userAnswers1.length > 0) {
					userAnswers1.pop();
				}
				Correct.css('color', 'blue').css('display', 'block').text("You found all the factors!");
			}
		}
		else if(currentQuestion <= 5) {
			if(isFactor(Commons[currentQuestion][0], AnswerBox1.val()) && userAnswerIndex1 < RealAnswer1.length) {
				for(i = 1; i <= amountOfDivs; i++) {
					if(AnswerBox1.val() == $('#Factor' + i).html()) {
						Repeated = true;
					}
				}
				if(Repeated) {
					setTimeout(function() {
						Correct.css('display', 'none');
					}, 1000);
					Correct.css('color', 'orange').css('display', 'block').text("You have found that factor!");
					document.getElementById('AnswerBox1').value = "";
					return;
				}

				createHTMLElement('<div/>', AnswerLeft, AnswerTop, "Answer", "Factor" + amountOfDivs, AnswerBox1.val(), "");
				amountOfDivs++;
				AnswerBox1.css('top', AnswerTop + innerHeight * 0.06);
				userAnswers1[userAnswerIndex1] = AnswerBox1.val();
				userAnswerIndex1++;

				setTimeout(function() {
					Correct.css('display', 'none');
				}, 1000);
				Correct.css('color', 'blue').css('display', 'block').text("Great job!");
				document.getElementById('AnswerBox1').value = "";

				if(RealAnswer1.length === userAnswers1.length) {
					AnswerBox1.css('left', '69%').css('top', '44%');
				}
			}
			else if(isFactor(Commons[currentQuestion][1], AnswerBox1.val()) && userAnswerIndex1 != RealAnswer1.length+RealAnswer2.length) {
				for(i = RealAnswer1.length+1; i <= amountOfDivs; i++) {
					if(AnswerBox1.val() == $('#Factor' + i).html()) {
						Repeated = true;
					}
				}
				if(Repeated) {
					setTimeout(function() {
						Correct.css('display', 'none');
					}, 1000);
					Correct.css('color', 'orange').css('display', 'block').text("You have found that factor!");
					document.getElementById('AnswerBox1').value = "";
					return;
				}

				createHTMLElement('<div/>', AnswerLeft, AnswerTop, "Answer", "Factor" + amountOfDivs, AnswerBox1.val(), "");
				amountOfDivs++;
				AnswerBox1.css('top', AnswerTop + innerHeight * 0.06);
				userAnswers1[userAnswerIndex1] = AnswerBox1.val();
				userAnswerIndex1++;

				setTimeout(function() {
					Correct.css('display', 'none');
				}, 1000);
				Correct.css('color', 'blue').css('display', 'block').text("Great job!");
				document.getElementById('AnswerBox1').value = "";

				if(userAnswerIndex1 == RealAnswer1.length+RealAnswer2.length) {
					AnswerBox1.css('left', '50%').css('top', '49%');
					Final_Answer.css('display', 'block');
				}
			}
			else if(userAnswerIndex1 === RealAnswer1.length+RealAnswer2.length && GreatestCommonFactor(Commons[currentQuestion][0], Commons[currentQuestion][1]) == AnswerBox1.val()) {
				Correct.css('color', 'blue').text("You found the LCM!").css('display', 'block');
				document.getElementById('AnswerBox1').value = "";
				userAnswerIndex1 = 0;
				amountOfDivs = 1;
				while(userAnswers1.length > 0) {
					userAnswers1.pop();
				}
				setTimeout(function() {
					for(i = 1; i <= amountOfDivs; i++) {
						$('#Factor'+i).remove();
					}
					Correct.css('display', 'none');
					Final_Answer.css('display', 'none');
					newQuestion();
				}, 1000);
			}
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 1000);
			document.getElementById('AnswerBox1').value = "";
			Correct.css('color', 'orange').css('display', 'block').text(AnswerBox1.val() + " is not a factor of " + FactorNumbers[currentQuestion].Factor);
		}
	};

	var newQuestion = function() {
		console.log("currentQuestion = ", currentQuestion);
		currentQuestion++;
		var Answer = $('.Answer');
		var Factor_Multiple1 = $('.Factor-Multiple1');
		var Factor_Multiple2 = $('.Factor-Multiple2');

		Answer.empty();
		if(currentQuestion <= 2) {
			Factor_Multiple1.text(FactorNumbers[currentQuestion].Factor);
			RealAnswer1 = findFactors(FactorNumbers[currentQuestion].Factor);
			$('#AnswerBox1').css('left', '47%').css('top', '45%');
		}
		else if(currentQuestion <= 5){
			$('#Description').text("Find all of the factors for each number, then answer what the greatest common factor is");
			Factor_Multiple1.css('left', '29%').text(Commons[currentQuestion][0]);
			Factor_Multiple2.text(Commons[currentQuestion][1]);
			$('#AnswerBox1').css('left', '29%').css('top', '45%');
			RealAnswer1 = findFactors(Commons[currentQuestion][0]);
			RealAnswer2 = findFactors(Commons[currentQuestion][1]);
		}
		else {
			$('#Description').text("Keep finding multiples for each number until you find a common multiple, then answer what the least common multiple");
			Factor_Multiple1.css('left', '29%').text(Commons[currentQuestion][0]);
			Factor_Multiple2.text(Commons[currentQuestion][1]);
			$('#AnswerBox1').css('left', '29%').css('top', '45%');
			RealAnswer1 = findFactors(Commons[currentQuestion][0]);
			RealAnswer2 = findFactors(Commons[currentQuestion][1]);
		}
	};

	$(document).on({
		click: function() {
			LeastCommonFactors[0] = $('#AnswerBox1').val();
		}
	}, "#AnswerBox1");

	$(document).on({
		click: function() {
			CheckAnswer();
		}
	}, "#Submit");
	document.addEventListener("keypress", function() {
		if(event.keyCode == 13) {
			CheckAnswer();
		}
	});
});