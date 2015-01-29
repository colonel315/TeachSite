$(document).ready(function() {
	var Question = {};			//constructs an empty JSON structor for questions

	/**
	 * generates questions and answers into the JSON structure Question.
	 */
	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
			Question[i]["answer"] = "";
		}

		var PineappleValue = Math.round(Math.random()*3)+2;
		var AppleValue = Math.round(Math.random()*3)+2;
		var GrapeValue = Math.round(Math.random()*3)+2;
		var OrangeValue = Math.round(Math.random()*3)+2;
		var StrawberryValue = Math.round(Math.random()*3)+2;

		var FruitPounds = (Math.round(Math.random()*100)/100);

		$('#PineappleValue').text("$"+PineappleValue+" per pound");
		$('#AppleValue').text("$"+AppleValue+" per pound");
		$('#GrapeValue').text("$"+GrapeValue+" per pound");
		$('#OrangeValue').text("$"+OrangeValue+" per pound");
		$('#StrawberryValue').text("$"+StrawberryValue+" per pound");

		Question[0].prompt = "How much does "+FruitPounds+"lbs of pineapples cost? (Round to the nearest hundredth)";
		Question[0].answer = Math.round(((FruitPounds)*PineappleValue)*100)/100;

		FruitPounds = (Math.round(Math.random()*100)/100);

		Question[1].prompt = "How much does "+FruitPounds+"lbs of apples cost? (Round to the nearest hundredth)";
		Question[1].answer = Math.round(((FruitPounds)*AppleValue)*100)/100;

		var MinithonsValue = Math.round(Math.random()*3)+2;
		var ShellersValue = Math.round(Math.random()*3)+2;
		var ValsValue = Math.round(Math.random()*3)+2;
		var PranksValue = Math.round(Math.random()*3)+2;
		var SpeedysValue = Math.round(Math.random()*3)+2;

		var GallonAmount = (Math.round(Math.random()*100)/100)+10;

		$('#MinithonsValue').text("$"+MinithonsValue+" per gallon");
		$('#ShellersValue').text("$"+ShellersValue+" per gallon");
		$('#ValsValue').text("$"+ValsValue+" per gallon");
		$('#PranksValue').text("$"+PranksValue+" per gallon");
		$('#SpeedysValue').text("$"+SpeedysValue+" per gallon");

		Question[2].prompt = "How much would it cost to get "+GallonAmount+" gallons at Minithon? (Round to the nearest hundredth)";
		Question[2].answer = Math.round(((GallonAmount)*MinithonsValue)*100)/100;

		GallonAmount = (Math.round(Math.random()*100)/100)+13;

		Question[3].prompt = "How much would it be to get "+GallonAmount+" gallons at Speedys? (Round to the nearest hundredth)";
		Question[3].answer = Math.round(((GallonAmount)*SpeedysValue)*100)/100;

		GallonAmount = (Math.round(Math.random()*100)/100)+21;

		Question[4].prompt = "How much would it be to get "+GallonAmount+" gallons at Shellers? (Round to the nearest hundredth)";
		Question[4].answer = Math.round(((GallonAmount)*ShellersValue)*100)/100;

		var Cost = Math.round(Math.random()*2)+2;
		var FootAmount = Math.round(Math.random()*3)+3;

		Question[5].prompt = "A "+FootAmount+" feet leash costs $"+Cost+". How much would it cost in yards?" +
							" (Round to the nearest Hundredth)";
		Question[5].answer = Math.round((Cost/(FootAmount*3))*100)/100;

		GallonAmount = Math.round(Math.random()*2)+2;
		Cost = Math.round(Math.random()*3)+3;

		Question[6].prompt = GallonAmount+" gallons of punch costs $"+Cost+". How much would it cost in pints? (Round to the nearest hundredth)";
		Question[6].answer = Math.round((Cost/(GallonAmount/8))*100)/100;

		var Temperature = Math.round(Math.random()*70)+20;
		Question[7].prompt = "It is "+Temperature+" degrees Farenheit. What would the temperature be in Celcius? (Round to the nearest tenth)";
		Question[7].answer = Math.round(((Temperature-32)*(5/9))*10)/10;

		Temperature = Math.round(Math.random()*20)+20;
		Question[8].prompt = "It is "+Temperature+" degrees Celcius. What would the temperature be in Farenheit? (Round to the nearest tenth)";
		Question[8].answer = Math.round((Temperature*(9/5))+32*10)/10;

		var YardAmount = Math.round(Math.random()*5)+4;
		Cost = Math.round(Math.random()*5)+5;
		Question[9].prompt = YardAmount+" yards of climbing rope costs $"+Cost+". How much would it cost in feet? (Round to the nearest hundredth)";
		Question[9].answer = Math.round((Cost/(YardAmount/3))*100)/100;
	};

	/**
	 * checks to see if the users answers are correct.
	 */
	var checkAnswer = function() {
		for(var i = 1; i <= 10; i++) {
			var UsersAnswer = "";

			UsersAnswer = $('#userAns'+i).val(); //Changing the i into a string so that way I don't have to have many a if statements
			UsersAnswer = UsersAnswer.toLowerCase();
			UsersAnswer = UsersAnswer.replace(/\s/g, "");
			UsersAnswer = UsersAnswer.replace("$", "");
			UsersAnswer = UsersAnswer.toString();

			var RealAnswer = Question[i-1].answer;
			RealAnswer = RealAnswer.toString();
			RealAnswer = RealAnswer.toLowerCase();
			RealAnswer = RealAnswer.replace(/\s/g, "");
			RealAnswer = RealAnswer.replace("$", "");

			var DisplayCorrect = "";

			if(UsersAnswer === RealAnswer) {
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
		}
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