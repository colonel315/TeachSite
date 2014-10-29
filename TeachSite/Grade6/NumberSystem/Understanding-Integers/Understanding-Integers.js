/**
 * Created by Trey on 10/27/2014.
 */

/**
 * places the answers and questions onto page.
 * @param questions
 * @constructor
 */
var Formatter = function(questions) {
	var questionArray;
	var randomNum;

	for(var i = 1; i <= 10; i++) {
		var Question = $('#Question' + i);
		questionArray = Question.find('input');

		randomNum = math.round(math.random(0, 3), 0);

		$(questionArray[randomNum]).addClass("Correct");

		questionArray = Question.find('div');

		$(questionArray[randomNum]).addClass('Correct');
		$(questionArray[randomNum]).text(questions[i - 1].correctAnswer);

		Question.find('p').text(questions[i - 1].prompt);
	}

	questionArray = $('input[type=checkbox]+div');
	for(i = 0; i < questionArray.length; i++) {
		if($(questionArray[i]).attr('class') != 'Correct') {
			randomNum = math.round(math.random(-100, 100), 0);
			$(questionArray[i]).text(randomNum);
		}
	}
};

$(document).ready(function() {
	var Question = {};

	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
			Question[i]["correctAnswer"] = "";
		}

		Question[0].prompt = "Adding 2 pens to materials";
		Question[0].correctAnswer = "2";

		Question[1].prompt = "Using 4 stamps for mail";
		Question[1].correctAnswer = "-4";

		Question[2].prompt = "The temperature is at -17 degrees farenheit at 3:00am. The temperature at " +
		"4:00pm is -23 degrees farenheit. Which is colder?";
		Question[2].correctAnswer = "-23";

		Question[3].prompt = "Taking away $2.";
		Question[3].correctAnswer = "-2";

		Question[4].prompt = "Made 5 cups from clay.";
		Question[4].correctAnswer = "5";

		Question[5].prompt = "The temperature is at -30 degrees farenheit at 5:00am. The temperature at " +
		"9:00pm is -29 degrees farenheit. Which is warmer?";
		Question[5].correctAnswer = "-29";

		Question[6].prompt = "Taking away 9 minutes from the alarm.";
		Question[6].correctAnswer = "-9";

		Question[7].prompt = "The temperature is at -9 degrees celcius at 3:00am. The temperature at " +
		"4:00pm is -23 degrees celcius. Which is colder?";
		Question[7].correctAnswer = "-23";

		Question[8].prompt = "The temperature is at -1 degrees Farenheit at 3:00am. The temperature at " +
		"4:00pm is -3 degrees Farenheit. Which is warmer?";
		Question[8].correctAnswer = "-1";

		Question[9].prompt = "The temperature is at -99 degrees Farenheit at 3:00am. The temperature at " +
		"4:00pm is -101 degrees Farenheit. Which is colder?";
		Question[9].correctAnswer = "-101";
	};

	generateJSON();
	Formatter(Question);

	var checkAnswer = function() {
		var questionArrayInput = $('input[type=checkbox]');
		var questionArrayDiv = $('input[type=checkbox]+div');

		for(var i = 0; i < questionArrayInput.length; i++) {
			if($(questionArrayInput[i]).prop('checked') && $(questionArrayInput[i]).attr('class') == 'Correct') {
				$(questionArrayDiv[i]).css('padding', '5px').css('background-color', 'aqua');
			}
			else if($(questionArrayInput[i]).prop('checked') && $(questionArrayInput[i]).attr('class') != 'Correct') {
				$(questionArrayDiv[i]).css('padding', '5px').css('background-color', 'salmon');
			}
		}
	};

	$(document).on({
		click: function() {
			checkAnswer();
		}
	}, "#Submit");
	document.addEventListener("keypress", function() {
		if(event.keyCode == 13) {
			checkAnswer();
		}
	});
});