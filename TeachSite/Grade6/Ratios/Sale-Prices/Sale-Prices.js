$(document).ready(function() {
	var Question = {};			//constructs an empty JSON structor for questions
	var AmountCorrect = 0;
	var Question1 = false;
	var Question2 = false;
	var Question3 = false;
	var Question4 = false;
	var Question5 = false;
	var Question6 = false;
	var Question7 = false;
	var Question8 = false;
	var Question9 = false;
	var Question10 = false;

	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
			Question[i]["answer"] = "";
		}

		var Cost = Math.round(Math.random()*200)+500;

		Question[0].prompt = "You want to buy the latest Playstation that costs $"+Cost+". How much would it cost with the sell price? (Round to the nearest hundredth)";
		Question[0].answer = Math.round((Cost - (Cost*0.12)*100))/100;

		Cost = Math.round(Math.random()*200)+500;

		Question[1].prompt = "Now for those XBox lovers the latest XBox just came out and it costs $"+Cost+". How much would it cost with the sell price? (Round to the nearest hundredth)";
		Question[1].answer = Math.round((Cost - (Cost*0.1))*100)/100;

		Cost = Math.round(Math.random()*20)+30;
		Question[2].prompt = "The newest Call of Duty game came out and everyone is itching to buy it. You bought it for a sale price of $"+Cost+". How much was the original price? (Round to the nearest hundredth)";
		Question[2].answer = Math.round((Cost/0.8)*100)/100;

		Cost = Math.round(Math.random()*20)+10;
		Question[3].prompt = "A new Steven King book just came out. You got it for a sale price of $"+Cost+". How much it originally? (Round to the nearest hundredth)";
		Question[3].answer = Math.round((Cost/0.72)*100)/100;

		Cost = Math.round(Math.random()*20)+5;
		Question[4].prompt = "Cindy's dinner cost her $"+Cost+". She left 15% tip. How much money did she leave for tip? (Round to the nearest hundredth)";
		Question[4].answer = Math.round((Cost*0.15)*100)/100;

		Cost = Math.round(Math.random()*30)+50;
		Question[5].prompt = "After dinner Cindy bought herself a pair of shoes that cost $"+Cost+". Shipping and handling was 5% of the cost. How much was shipping and handling? (Round to the nearest hundredth)";
		Question[5].answer = Math.round((Cost*0.05)*100)/100;

		Cost = Math.round(Math.random()*100)+5;
		var Sale = Math.round(Math.random()*50)+5;
		Question[6].prompt = Sale+"% of $"+Cost+" = ";
		Question[6].answer = Math.round((Cost*Sale)*100)/100;

		Cost = Math.round(Math.random()*100)+5;
		Sale = Math.round(Math.random()*50)+5;
		Question[7].prompt = Sale+"% of $"+Cost+" = ";
		Question[7].answer = Math.round((Cost*Sale)*100)/100;

		var Population = Math.round(Math.random()*300)+800;
		var AmountVoted = Math.round(Math.random()*80)+30;
		Question[8].prompt = AmountVoted+"% of "+Population+" voted for the new Mayor of the city. How many people voted? (Round to the nearest whole)";
		Question[8].answer = Math.round((Population/100)*AmountVoted);

		Population = Math.round(Math.random()*300)+800;
		AmountVoted = Math.round(Math.random()*80)+30;
		Question[9].prompt = AmountVoted+"% of "+Population+" voted for the new Mayor of the city. How many people did not voted? (Round to the nearest whole)";
		Question[9].answer = Math.round(Population - (Population/100)*AmountVoted);
	};

	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			var UsersAnswer = "";

			UsersAnswer = UsersAnswer.replace("$", "");
			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.toString();

			var RealAnswer = Question[i-1].answer;
			RealAnswer = RealAnswer.toString();

			var DisplayCorrect = "";

			if(UsersAnswer === RealAnswer) {
				if(i == 1) {
					Question1 = true;
				}
				else if(i == 2) {
					Question2 = true;
				}
				else if(i == 3) {
					Question3 = true;
				}
				else if(i == 4) {
					Question4 = true;
				}
				else if(i == 5) {
					Question5 = true;
				}
				else if(i == 6) {
					Question6 = true;
				}
				else if(i == 7) {
					Question7 = true;
				}
				else if(i == 8) {
					Question8 = true;
				}
				else if(i == 9) {
					Question9 = true;
				}
				else if(i == 10) {
					Question10 = true;
				}

				AmountCorrect++;

				DisplayCorrect = $('#correct'+i);
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "green");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("You got this right!");
			}
			else {
				DisplayCorrect = $('#correct'+i);
				DisplayCorrect.css("display", "block");
				DisplayCorrect.css("background-color", "blue");
				DisplayCorrect.css("color", "white");
				DisplayCorrect.text("Try again, you got it wrong.");
			}
			Question.NewQuestion();
		}
	};

	Question["NewQuestion"] = function() {

	};

	generateJSON();
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