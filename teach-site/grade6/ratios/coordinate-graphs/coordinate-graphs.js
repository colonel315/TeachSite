/**
 * Program generates a cartesian coordinate plane with different shapes on it and will generate questions for students to answer by
 * clicking on the shape.
 * Program will display whether the student is correct or not to let them know they are moving to the next question
 */
$(document).ready(function() {
	/**
	 * Creates an empty JSON structure to store questions inside of for students to answer
	 * @type {{}}
	 */
	var Question = {};

	/**
	 * Keeps track of what problem number the student is on so that way program can tell when student has finished.
	 * @type {number}
	 */
	var problemNumber = 0;

	/**
	 * used throughout program in different spots so created a single variable to use.
	 * @type {*|jQuery|HTMLElement}
	 */
	var Correct = $('#Correct');

	/**
	 * This function will generate questions and store them inside of the JSON structure Question.prompt.
	 */
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

	/**
	 * Calls generateJSON() to be able to print questions out.
	 */
	generateJSON();

	/**
	 * Prints out the first question of the page.
	 */
	$('#Question').text(Question[problemNumber].prompt);

	/**
	 * moves on to the next problem and prints it out.
	 */
	Question["newQuestion"] = function() {
		problemNumber++;
		$('#Question').text(Question[problemNumber].prompt);
	};

	/**
	 * Displays whether the student is correct, got them all correct, or if they were wrong.
	 * @param correct is a boolean that will tell whether the student got it correct or not
	 */
	gotCorrect = function(correct) {
		if(correct && problemNumber === 9) {
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.text("You got them all correct!")
		}
		else if(correct) {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);
			Correct.css('display', 'block');
			Correct.css('color', 'blue');
			Correct.text("You got it correct!")
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

	/**
	 * graph holds Raphael properties at the location with the ID of "FirstDiscription" to be able to draw there.
	 */
	var graph = Raphael("FirstDescription");

	/**
	 * Creates a blue rectangle border around the graph
	 */
	graph.rect(0, 0, 500, 500)
		.animate({
			stroke: "blue"
		});

	/**
	 * Creates the coordinate plane to shapes on.
	 */
	graph.path("M 50, 0 L 50, 500 M 100, 0 L 100, 500 M 150, 0 L 150, 500 M 200, 0 L 200, 500 " +
		"M 300, 0 L 300, 500 M 350, 0 L 350, 500 M 400, 0 L 400, 500 M 450, 0 L 450, 500 M 0 50 L 500, 50 " +
		"M 0, 100 L 500, 100 M 0, 150 L 500, 150 M 0, 200 L 500, 200 M 0, 300 L 500, 300 " +
		"M 0, 350 L 500, 350 M 0, 400 L 500, 400 M 0, 450 L 500, 450")
		.animate({
			stroke: "orange",
			"stroke-width": "3"
		});

	/**
	 * Creates the X and Y axis with a bolder line.
	 */
	graph.path("M 250, 0 L 250, 500 M 0, 250 L 500, 250")
		.animate({
			stroke: "orange",
			"stroke-width": "6"
		});

	/**
	 * The next several make the points so that students can tell what the points are.
	 */
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

	/**
	 * creates a triangle that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * creates a Diamond that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else if(problemNumber === 8) {
				setTimeout(function() {
					Question.newQuestion();
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * creates a Circle that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else if(problemNumber === 7) {
				setTimeout(function() {
					Question.newQuestion();
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * creates a Square that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else if(problemNumber === 9) {
				setTimeout(function() {
					gotCorrect(true);
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * creates a Rhombus that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * creates a Parallelogram that when clicked if the answer is correct will go through the gotCorrect function and print out
	 * that the student answered correctly, otherwise wil answer that student did not get it correct.
	 */
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
				}, 2000);
				gotCorrect(true);
			}
			else if(problemNumber === 6) {
				setTimeout(function() {
					Question.newQuestion();
				}, 2000);
				gotCorrect(true);
			}
			else {
				gotCorrect(false);
			}
		});

	/**
	 * key is a raphael structure to be able to use the methods inside of the raphael class at the div with the id of
	 * "key"
	 */
	var key = Raphael("Key");

	/**
	 * creates a rectangle for the key
	 */
	key.rect(0, 0, 300, 300)
		.animate({
			stroke: "blue",
			"stroke-width": "2"
		});

	/**
	 * Creates a title for the rectangle called 'Key' 150px to the right and 30px down inside of the space
	 */
	key.text(150, 30, "Key")
		.animate({
			"font-size": "50",
			"font-color": "orange"
		});

	/**
	 * Prints out the word "Diamond" at the point (50, 70)
	 */
	key.text(50, 70, "Diamond:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 * Creates a diamond
	 */
	key.path("M 100, 70 L 110, 85, 120, 70, 110, 55 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});

	/**
	 * prints out the word "Circle" at the point (50, 110)
	 */
	key.text(50, 110, "Circle:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 * Creates a circle
	 */
	key.circle(110, 110, 15)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});

	/**
	 *Prints out the word "square" at the point (50, 150)
	 */
	key.text(50, 150, "Square:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 *Creates a Square
	 */
	key.rect( 100, 140, 20, 20)
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});

	/**
	 *Prints out the word "Rhombus" at the point (50, 190)
	 */
	key.text(50, 190, "Rhombus:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 * Creates a rhombus
	 */
	key.path("M 110, 180 L 130, 180, 140, 200, 100, 200 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});

	/**
	 *Prints out "Parallelogram" at the point (70, 230)
	 */
	key.text(70, 230, "Parallelogram:")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 *Creates a parallelogram
	 */
	key.path("M 150, 220 L 180, 220, 170, 240, 140, 240 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});

	/**
	 *Prints out "Triangle" at the point (50, 270)
	 */
	key.text(50, 270, "Triangle")
		.animate({
			"font-size": "20",
			"font-color": "blue"
		});

	/**
	 * Creates a triangle
	 */
	key.path("M 160, 260 L 175, 290, 145, 290 Z")
		.animate({
			stroke: "blue",
			"stroke-width": 3,
			fill: "blue"
		});
});