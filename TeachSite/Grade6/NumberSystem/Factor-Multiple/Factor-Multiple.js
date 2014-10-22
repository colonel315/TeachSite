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

	var generateJSON = function() {
		for(var i = 0; i < 3; i++) {
			FactorNumbers[i] = [];
			FactorNumbers[i].Factor = "";
		}
		for(i = 0; i < 6; i++) {
			for(var j = 0; j < 2; j++) {
				Commons[i] = [[]];
				Commons[i][j] = "";
			}
		}

		for(i = 0; i < 3; i++) {
			FactorNumbers[i].Factor = math.floor(math.random(10, 50));
		}
		for(i = 0; i < 6; i++) {
			for(j = 0; j < 2; j++) {
				Commons[i][j] = math.floor(math.random(2, 20));
			}
		}
	};

	generateJSON();
	$('#Factor-Multiple').text(FactorNumbers[currentQuestion].Factor);

	var CheckAnswer = function() {

	};

	document.on({
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