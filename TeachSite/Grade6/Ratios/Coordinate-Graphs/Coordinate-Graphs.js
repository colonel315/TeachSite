/**
 * fixes: If student gets wrong can't change answer, create method to do so.
 * alert message for when student gets it wrong.
 */
$(document).ready(function() {
	var Question = {};
	var problemNumber = 0; //Which number a student is on.
	var Correct = $('#Correct');

	var generateJSON = function() {
		for(var i = 0; i < 10; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
		}

		Question[0].prompt = "Click on the shape that is in quadrent IV?";
		Question[1].prompt = "Click on the shape that is in quadrent I?";
		Question[2].prompt = "Click on the shape that is on the X axis?";
		Question[3].prompt = "Click on the shape that is on the Y axis?";
		Question[4].prompt = "Click on the shape that is on the point (-0.5, -0.5)?";
		Question[5].prompt = "Click on the shape that is in quadrent II?";
		Question[6].prompt = "Click on the shape that is on the point (-3, 3)?";
		Question[7].prompt = "Click on the shape that is in quadrent III?";
		Question[8].prompt = "Click on the shape that is on the point (1.5, 4)?";
		Question[9].prompt = "Click on the shape that is on the point (0, 2)?";
	};

	generateJSON();
	$('#Question').text(Question[problemNumber].prompt);

	Question["newQuestion"] = function() {
		problemNumber++;
		$('#Question').text(Question[problemNumber].prompt);
	};

	gotCorrect = function(correct) {
		if(correct) {
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.text("You got them all correct!")
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);
			Correct.css('display', 'block');
			Correct.css('color', 'orange');
			Correct.text("Try again.");
		}
	};
	//Creates the coordinate graph with points.
	var graph = Raphael("FirstDescription");
	graph.rect(0, 0, 500, 500)
		.animate({
			stroke: "blue"
		});

	graph.path("M 50, 0 L 50, 500 M 100, 0 L 100, 500 M 150, 0 L 150, 500 M 200, 0 L 200, 500 " +
		"M 300, 0 L 300, 500 M 350, 0 L 350, 500 M 400, 0 L 400, 500 M 450, 0 L 450, 500 M 0 50 L 500, 50 " +
		"M 0, 100 L 500, 100 M 0, 150 L 500, 150 M 0, 200 L 500, 200 M 0, 300 L 500, 300 " +
		"M 0, 350 L 500, 350 M 0, 400 L 500, 400 M 0, 450 L 500, 450")
		.animate({
			stroke: "orange",
			"stroke-width": "3"
		});
	graph.path("M 250, 0 L 250, 500 M 0, 250 L 500, 250")
		.animate({
			stroke: "orange",
			"stroke-width": "6"
		});
	graph.text(240, 265, "0")
		.animate({
			"font-size": 25
		});
	graph.text(190, 265, "-1")
		.animate({
			"font-size": 25
		});
	graph.text(140, 265, "-2")
		.animate({
			"font-size": 25
		});
	graph.text(90, 265, "-3")
		.animate({
			"font-size": 25
		});
	graph.text(40, 265, "-4")
		.animate({
			"font-size": 25
		});
	graph.text(290, 265, "1")
		.animate({
			"font-size": 25
		});
	graph.text(340, 265, "2")
		.animate({
			"font-size": 25
		});
	graph.text(390, 265, "3")
		.animate({
			"font-size": 25
		});
	graph.text(440, 265, "4")
		.animate({
			"font-size": 25
		});
	graph.text(240, 215, "1")
		.animate({
			"font-size": 25
		});
	graph.text(240, 165, "2")
		.animate({
			"font-size": 25
		});
	graph.text(240, 115, "3")
		.animate({
			"font-size": 25
		});
	graph.text(240, 65, "4")
		.animate({
			"font-size": 25
		});
	graph.text(235, 315, "-1")
		.animate({
			"font-size": 25
		});
	graph.text(235, 365, "-2")
		.animate({
			"font-size": 25
		});
	graph.text(235, 415, "-3")
		.animate({
			"font-size": 25
		});
	graph.text(235, 465, "-4")
		.animate({
			"font-size": 25
		});
	//creates a triangle
	var Triangle = graph.path("M 100, 235 L 115, 265, 85, 265 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 2) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});
	//creates diamond
	var Diamond = graph.path("M 315, 50 L 325, 65, 335, 50, 325, 35 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 1) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else if(problemNumber === 8) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});
	//creates circle
	var Circle = graph.circle(225, 275, 15)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 4) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else if(problemNumber === 7) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});
	//creates square
	var Square = graph.rect(242, 142, 20, 20)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 3) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else if(problemNumber === 9) {
				setTimeout(function() {
					gotCorrect(true);
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});
	//creates rhombus
	var Rhombus = graph.path("M 440, 440 L 460, 440, 470, 460, 430, 460 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 0) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});
	//creates parallelogram
	var Parallelogram = graph.path("M 90, 90 L 120, 90, 110, 110, 80, 110 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		})
		.click(function() {
			if(problemNumber === 5) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else if(problemNumber === 6) {
				setTimeout(function() {
					Question.newQuestion();
				}, 1000);
			}
			else {
				gotCorrect(false);
			}
		});

	var key = Raphael("Key");
	key.rect(0, 0, 300, 300)
		.animate({
			stroke: "blue",
			"stroke-width": "2"
		});
	key.text(150, 30, "Key")
		.animate({
			"font-size": "50",
			"font-color": "orange"
		});
	key.text(50, 70, "Diamond:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.path("M 100, 70 L 110, 85, 120, 70, 110, 55 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
	key.text(50, 110, "Circle:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.circle(110, 110, 15)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
	key.text(50, 150, "Square:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.rect( 100, 140, 20, 20)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
	key.text(50, 190, "Rhombus:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.path("M 110, 180 L 130, 180, 140, 200, 100, 200 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
	key.text(70, 230, "Parallelogram:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.path("M 150, 220 L 180, 220, 170, 240, 140, 240 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
	key.text(50, 270, "Triangle")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});
	key.path("M 160, 260 L 175, 290, 145, 290 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
});