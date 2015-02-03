/**
 * This will generate Questions for students to answer and having them round to the nearest hundredth. This helps
 * students relate to math by having students taking the cost of an item and then multiplying by the percentage of the
 * sale then subtract that number from the orginal price to find the new price.
 */
$(document).ready(function() {
	/**
	 * Constructs an empty JSON structure to store questions and answers inside of
	 * @type {{}}
	 */
	var Question = {};

	/**
	 * generates questions to print to the page and stores the answers inside of Questions[i].answer for later use.
	 */
	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
			Question[i]["answer"] = "";
		}

		var Cost = Math.round(Math.random() * 200) + 500;

		Question[0].prompt = "You want to buy the latest Playstation that costs $" + Cost + ". How much would it cost with the sell price? (Round to the nearest hundredth)";
		Question[0].answer = Math.round((Cost - Math.round((Cost * 0.12) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 200) + 500;

		Question[1].prompt = "Now for those XBox lovers the latest XBox just came out and it costs $" + Cost + ". How much would it cost with the sell price? (Round to the nearest hundredth)";
		Question[1].answer = Math.round((Cost - Math.round((Cost * 0.1) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 20) + 30;
		Question[2].prompt = "The newest Call of Duty game came out and everyone is itching to buy it. You bought it for a sale price of $" + Cost + ". How much was the original price? (Round to the nearest hundredth)";
		Question[2].answer = Math.round((Cost - Math.round((Cost * 0.8) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 20) + 10;
		Question[3].prompt = "A new Steven King book just came out. You got it for a sale price of $" + Cost + ". How much it originally? (Round to the nearest hundredth)";
		Question[3].answer = Math.round((Cost - Math.round((Cost * 0.72) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 20) + 5;
		Question[4].prompt = "Cindy's dinner cost her $" + Cost + ". She left 15% tip. How much money did she leave for tip? (Round to the nearest hundredth)";
		Question[4].answer = Math.round((Cost - Math.round((Cost * 0.15) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 30) + 50;
		Question[5].prompt = "After dinner Cindy bought herself a pair of shoes that cost $" + Cost + ". Shipping and handling was 5% of the cost. How much was shipping and handling? (Round to the nearest hundredth)";
		Question[5].answer = Math.round((Cost - Math.round((Cost * 0.05) * 100) / 100) * 100) / 100;

		Cost = Math.round(Math.random() * 100) + 5;
		var Sale = Math.round(Math.random() * 50) + 5;
		Question[6].prompt = Sale + "% of $" + Cost + " = ";
		Question[6].answer = Math.round((Cost * Sale) * 100) / 100;

		Cost = Math.round(Math.random() * 100) + 5;
		Sale = Math.round(Math.random() * 50) + 5;
		Question[7].prompt = Sale + "% of $" + Cost + " = ";
		Question[7].answer = Math.round((Cost * Sale) * 100) / 100;

		var Population = Math.round(Math.random() * 300) + 800;
		var AmountVoted = Math.round(Math.random() * 80) + 30;
		Question[8].prompt = AmountVoted + "% of " + Population + " voted for the new Mayor of the city. How many people voted? (Round to the nearest whole)";
		Question[8].answer = Math.round((Population / 100) * AmountVoted);

		Population = Math.round(Math.random() * 300) + 800;
		AmountVoted = Math.round(Math.random() * 80) + 30;
		Question[9].prompt = AmountVoted + "% of " + Population + " voted for the new Mayor of the city. How many people did not voted? (Round to the nearest whole)";
		Question[9].answer = Math.round(Population - (Population / 100) * AmountVoted);
	};

	/**
	 * This function checks the students answers
	 */
	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			/**
			 *
			 * @type {*|jQuery}
			 */
			var UsersAnswer = $('#userAns' + i).val();
			UsersAnswer = UsersAnswer.replace("$", "");
			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.toString();

			var RealAnswer = Question[i - 1].answer;
			RealAnswer = RealAnswer.toString();
			RealAnswer = RealAnswer.replace("$", "");
			RealAnswer = RealAnswer.toLowerCase();
			RealAnswer = RealAnswer.replace(/\s/g, "");

			var DisplayCorrect = $('#correct' + i);

			if(UsersAnswer === RealAnswer) {
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "green");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("You got this right!");
			}
			else {
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "blue");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("Try again, you got it wrong.");
			}
		}
	};

	/**
	 * calls the generateJSON class to be able to print out the questions and store the answers to Question[i].prompt
	 */
	generateJSON();

	/**
	 * prints out the questions generated by generateJSON
	 */
	$("#FirstQuestion").text(Question[0].prompt);
	$("#SecondQuestion").text(Question[1].prompt);
	$("#ThirdQuestion").text(Question[2].prompt);
	$("#FourthQuestion").text(Question[3].prompt);
	$("#FifthQuestion").text(Question[4].prompt);
	$("#SixthQuestion").text(Question[5].prompt);
	$("#SeventhQuestion").text(Question[6].prompt);
	$("#EigthQuestion").text(Question[7].prompt);
	$("#NinthQuestion").text(Question[8].prompt);
	$("#TenthQuestion").text(Question[9].prompt);

	$(document).on({
		click: function() {
			checkAnswer();
		}
	}, "#check");

	document.addEventListener('keypress', function(event) {
		if(event.keyCode == 13) {
			checkAnswer();
		}
	});
});