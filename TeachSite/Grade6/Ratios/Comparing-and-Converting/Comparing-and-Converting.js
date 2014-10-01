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

			if(i >= 5) {
				Question[i]["otherAnswer11"] = "";
			}
		}

		var appleValue = Math.round(Math.random()*100)+50;
		var orangeValue = Math.round(Math.random()*100)+50;
		var plumValue = Math.round(Math.random()*100)+50;
		var grapeValue = Math.round(Math.random()*100)+50;

		$('#AppleValue').text("$"+appleValue+" per pound");
		$('#OrangeValue').text("$"+orangeValue+" per kilogram");
		$('#PlumValue').text("$"+plumValue+" per ounce");
		$('#GrapeValue').text("$"+grapeValue+" per gram");

		var Weight1 = Math.round(Math.random()*5)+1;
		var Weight2 = Math.round(Math.random()*80)+16;

		Question[0].prompt = "Which is the better deal, "+Weight1+"lbs of apples or "+Weight2+"ozs of plums? (If they are the same put in \"equal\")";
		Question[0].answer = BetterDeal(appleValue, Weight1, "pound", "apple", plumValue, Weight2, "ounce", "plum", "equal");

		Weight1 = Math.round(Math.random()*10)+1;
		Weight2 = Math.round(Math.random()*360)+35;

		Question[1].prompt = "Which is the better deal, "+Weight1+"kgs of oranges or "+Weight2+"ozs of plums? (If they are the same put in \"equal\")";
		Question[1].answer = BetterDeal(orangeValue, Weight1, "kilogram", "orange", plumValue, Weight2, "ounce", "plum", "equal");

		Weight1 = Math.round(Math.random()*5)+1;
		Weight2 = Math.round(Math.random()*2270)+450;

		Question[2].prompt = "Which is the better deal, "+Weight1+"lbs of apples or "+Weight2+"gs of grapes? (If they are the same put in \"equal\")";
		Question[2].answer = BetterDeal(appleValue, Weight1, "pound", "apple", grapeValue, Weight2, "gram", "grape", "equal");

		Weight1 = Math.round(Math.random()*10000)+1000;
		Weight2 = Math.round(Math.random()*10)+1;

		Question[3].prompt = "Which is the better deal, "+Weight1+"g of grapes or "+Weight2+"kgs of oranges? (If they are the same put in \"equal\")";
		Question[3].answer = BetterDeal(grapeValue, Weight1, "gram", "grape", orangeValue, Weight2, "kilogram", "orange", "equal");

		Weight1 = Math.round(Math.random()*290)+28;
		Weight2 = Math.round(Math.random()*10)+1;

		Question[4].prompt = "Which is the better deal, "+Weight1+"gs of grapes or "+Weight2+"ounces of plums? (If they are the same put in \"equal\")";
		Question[4].answer = BetterDeal(grapeValue, Weight1, "gram", "grape", plumValue, Weight2, "ounce", "plum");

		Weight1 = Math.round(Math.random()*1000)/100;
		Weight2 = Math.round(Math.random()*2000)/100;

		Question[5].prompt = Weight1+"lbs of apples + "+Weight2+"ozs of plums = ";
		Question[5].answer = Math.round((Weight1*16 + Weight2)*100)/100; //16ozs = 1ib ... appleWeight*16 + plumWeight
		Question[5].otherAnswer1 = Math.round((Weight1 + Weight2/16)*100)/100; //1ib = 16ozs ... appleWeight + plumWeight/16

		Weight1 = Math.round(Math.random()*10000)/100;
		Weight2 = Math.round(Math.random()*100000)/100;

		Question[6].prompt = Weight1+"kgs of oranges / "+Weight2+"gs of grapes = ";
		Question[6].answer = Math.round((Weight1*1000 / Weight2)*100)/100; //1000g = 1kg ... orangeWeight*1000 / grapeWeight
		Question[6].otherAnswer1 = Math.round((Weight1 / (Weight2/1000))*100)/100; // 1kg = 1000g ... orangeWeight / (grapeWeight/1000)

		Weight1 = Math.round(Math.random()*1000)/100;
		Weight2 = Math.round(Math.random()*100000)/100;

		Question[7].prompt = Weight1+"lbs of apples * "+Weight2+"gs of grapes = ";
		Question[7].answer = Math.round((Weight1*453.59237 * Weight2)*100)/100; // 453.59237gs = 1ib ... appleWeight*453.59237 * grapeWeight
		Question[7].otherAnswer1 = Math.round((Weight1 * (Weight2/453.59237))*100)/100; // 1ib  = 453.59237gs ... appleWeight * (grapeWeight/453.59237);
		
		Weight1 = Math.round(Math.random()*2000)/100;
		Weight2 = Math.round(Math.random()*100000)/100;
		
		Question[8].prompt = Weight1+"ozs of plums - "+Weight2+"gs of grapes = ";
		Question[8].answer = Math.round((Weight1*28.34952313 - Weight2)*100)/100; //28.34952313gs = 1oz ... plumWeight*28.34952313 - grapeWeight
		Question[8].otherAnswer1 = Math.round((Weight1 - Weight2/28.34952313)*100)/100; //1oz = 28.34952313gs ... plumWeight - grapeWeight/28.34952313

		Weight1 = Math.round(Math.random()*1000)/100;
		Weight2 = Math.round(Math.random()*2200)/100;

		Question[9].prompt = Weight1+"kgs of oranges - "+Weight2+"lbs of apples = ";
		Question[9].answer = Weight1*2.20462262 - Weight2; //2.20462262lbs = 1kg
		Question[9].otherAnswer1 = Weight1 - Weight2/2.20462262; //1kg = 2.20462262lbs
	};

	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			var UsersAnswer = "";

			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.replace(/ib/gi, ""); //gi = global case-insensitive.
			UsersAnswer = UsersAnswer.replace(/oz/gi, "");
			UsersAnswer = UsersAnswer.replace(/g/gi, "");
			UsersAnswer = UsersAnswer.replace(/kg/gi, "");
			UsersAnswer = UsersAnswer.replace(/s/gi, "");
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