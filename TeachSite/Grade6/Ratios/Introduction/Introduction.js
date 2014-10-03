/**
* Created by Trey on 8/22/2014.
*/

/**
 * This program creates a drag and drop page that checks to make sure the answer is in the correct spot.
 * Also randomly sorts the answers to make sure students understand the topic material.
 */

/**
 * Shuffles answers to randomly place them
 * @param Element1
 * @param Element2
 * @param Element3
 * @param Element4
 * @param Element5
 * @param Element6
 * @constructor
 */
var ArrayShuffle = function(Element1, Element2, Element3, Element4, Element5, Element6) {
	var RatioArray = ['#RatioSpot1', '#RatioSpot2', '#RatioSpot3', '#RatioSpot4', '#RatioSpot5', '#RatioSpot6'];
	var ElementArray = [Element1, Element2, Element3, Element4, Element5, Element6];

	var RandomNum1 = "";
	var RandomNum2 = "";
	for(var i = 0; i < 6; i++) {
		RandomNum1 = (Math.floor(Math.random()*RatioArray.length)+1)-1;
		RandomNum2 = (Math.floor(Math.random()*ElementArray.length)+1)-1;

		$(RatioArray[RandomNum1]).text(ElementArray[RandomNum2]);

		RatioArray.splice(RandomNum1, 1);
		ElementArray.splice(RandomNum2, 1);
	}
};

/**
 * This method checks to see if the RatioSpot is in the correct box.
 * @param RatioSpot
 * @param DropSpot
 * @returns {boolean}
 * @constructor
 */
var Comparison = function(RatioSpot, DropSpot) {
	return parseInt(RatioSpot.css('left'), 10) >= parseInt(DropSpot.css('left'), 10)-10 &&
			parseInt(RatioSpot.css('left'), 10) <= parseInt(DropSpot.css('left'), 10)+parseInt(DropSpot.css('width'), 10) &&
			parseInt(RatioSpot.css('top'), 10) >= parseInt(DropSpot.css('top'), 10)-10 &&
			parseInt(RatioSpot.css('top'), 10) <= parseInt(DropSpot.css('top'), 10)+parseInt(DropSpot.css('height'), 10);
};
$(document).ready(function() {
	var Question = {};
	var CurrentQuestionSet = 0;
	var Question1N = false;
	var Question1D = false;
	var Question2N = false;
	var Question2D = false;
	var Question3N = false;
	var Question3D = false;
	var RatioSpot1 = "";
	var RatioSpot2 = "";
	var RatioSpot3 = "";
	var RatioSpot4 = "";
	var RatioSpot5= "";
	var RatioSpot6 = "";

	/**
	 * creates questions and answers using JSON
	 */
	var generateJSON = function() {
		for(var i = 0; i < 3; i++) {
			Question[i] = [];
			Question[i]["prompt"] = "";
		}

		var ActionDVDs = Math.round(Math.random()*30)+1;
		var ComedyDVDs = Math.round(Math.random()*30)+1;
		var DocumentaryDVDs = Math.round(Math.random()*30)+1;
		var TotalDVDs = ActionDVDs+ComedyDVDs+DocumentaryDVDs;

		ArrayShuffle(ActionDVDs, ComedyDVDs, DocumentaryDVDs, TotalDVDs, TotalDVDs, TotalDVDs);

		$('#Question1').text("What is the ratio of comedy DVDs to the total amount of dvds?");
		$('#Question2').text("What is the ratio of action DVDs to the total amount of dvds?");
		$('#Question3').text("What is the ratio of documentary DVDs to the total amount of dvds?");

		Question[0].prompt = "Ms. Sherry loves to collect DVDs, she has "+ActionDVDs+" action DVDs, " +
			ComedyDVDs+" comedy DVDs, and "+DocumentaryDVDs+" documentary dvds. " +
			"Answer the questions by dragging the numbers to the appropriate spots.";
		Question[0]["ActionDVDs"] = ActionDVDs;
		Question[0]["ComedyDVDs"] = ComedyDVDs;
		Question[0]["DocumentaryDVDs"] = DocumentaryDVDs;
		Question[0]["TotalDVDs"] = ActionDVDs+ComedyDVDs+DocumentaryDVDs;

		var ScienceFiction = Math.round(Math.random()*10)+5;
		var Biographys = Math.round(Math.random()*10)+5;
		var MysteryNovels = Math.round(Math.random()*10)+5;

		Question[1].prompt = "Mrs. Carroll loves to read books, she has "+ScienceFiction+" science fiction novels, " +
			Biographys+" biographys, and "+MysteryNovels+" mystery novels. Answer the next questions by dragging and dropping " +
			"the answers.";
		Question[1]["ScienceFiction"] = ScienceFiction;
		Question[1]["Biographys"] = Biographys;
		Question[1]["MysteryNovels"] = MysteryNovels;
		Question[1]["TotalBooks"] = ScienceFiction+Biographys+MysteryNovels;

		var RockCDs = Math.round(Math.random()*20)+5;
		var RapCDs = Math.round(Math.random()*20)+5;
		var CountryCDs = Math.round(Math.random()*20)+5;

		Question[2].prompt = "Mr. Burr loves his music and he has made a decent collection of CDs including, "+RockCDs+" rock CDs, "+RapCDs+" rap CDs, " +
			+CountryCDs+" country CDs. Answer the questions by dragging the numbers to the appropriate spots.";
		Question[2]["RockCDs"] = RockCDs;
		Question[2]["RapCDs"] = RapCDs;
		Question[2]["CountryCDs"] = CountryCDs;
		Question[2]["TotalCDs"] = RockCDs+RapCDs+CountryCDs;
	};

	generateJSON();
	$('#Description').text(Question[0].prompt);

	/**
	 * This function sets each answer (The ration spots) to draggable
	 * sets each drop-box as a draggable event to let an object drop into it
	 * Also checks to see where the droppable object (ratio spot) was dropped and to see if it was in the correct spot.
	 */
	$(function() {
		//Created variables for multiple uses of each id
		RatioSpot1 = $('#RatioSpot1');
		RatioSpot2 = $('#RatioSpot2');
		RatioSpot3 = $('#RatioSpot3');
		RatioSpot4 = $('#RatioSpot4');
		RatioSpot5 = $('#RatioSpot5');
		RatioSpot6 = $('#RatioSpot6');

		var DropSpot1 = $('#drop-spot1');
		var DropSpot2 = $('#drop-spot2');
		var DropSpot3 = $('#drop-spot3');
		var DropSpot4 = $('#drop-spot4');
		var DropSpot5 = $('#drop-spot5');
		var DropSpot6 = $('#drop-spot6');

		//created variable for multiple uses of Question[CurrentQuestionSet]
		var question = "";

		//recreates draggable event
		RatioSpot1.draggable({
			revert: 'invalid'
		});
		//saves the data so that it can revert back to original position
		RatioSpot1.data({
			'originalLeft': RatioSpot1.css('left'),
			'originalTop': RatioSpot1.css('top')
		});
		console.log("Got to line 145");
		//checks to see if the answers are in the correct spot for RatioSpot1
		RatioSpot1.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot1.html() == question.ComedyDVDs && Comparison(RatioSpot1, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot1.html() == question.TotalDVDs && Comparison(RatioSpot1, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot1.html() == question.ActionDVDs && Comparison(RatioSpot1, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot1.html() == question.TotalDVDs && Comparison(RatioSpot1, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot1.html() == question.DocumentaryDVDs && Comparison(RatioSpot1, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot1.html() == question.TotalDVDs && Comparison(RatioSpot1, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot1.html() == question.ScienceFiction && Comparison(RatioSpot1, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot1.html() == question.MysteryNovels && Comparison(RatioSpot1, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot1.html() == question.Biographys && Comparison(RatioSpot1, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot1.html() == question.MysteryNovels && Comparison(RatioSpot1, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot1.html() == question.MysteryNovels && Comparison(RatioSpot1, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot1.html() == question.TotalBooks && Comparison(RatioSpot1, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot1.html() == question.RockCDs && Comparison(RatioSpot1, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot1.html() == question.CountryCDs && Comparison(RatioSpot1, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot1.html() == question.RapCDs && Comparison(RatioSpot1, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot1.html() == question.RockCDs && Comparison(RatioSpot1, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot1.html() == question.RapCDs && Comparison(RatioSpot1, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot1.html() == question.TotalCDs && Comparison(RatioSpot1, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		RatioSpot2.draggable({
			revert: 'invalid'
		});
		RatioSpot2.data({
			'originalLeft': RatioSpot2.css('left'),
			'originalTop': RatioSpot2.css('top')
		});
		//checks to see if the answers are in the correct spot for RatioSpot2
		RatioSpot2.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot2.html() == question.ComedyDVDs && Comparison(RatioSpot2, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot2.html() == question.TotalDVDs && Comparison(RatioSpot2, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot2.html() == question.ActionDVDs && Comparison(RatioSpot2, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot2.html() == question.TotalDVDs && Comparison(RatioSpot2, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot2.html() == question.DocumentaryDVDs && Comparison(RatioSpot2, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot2.html() == question.TotalDVDs && Comparison(RatioSpot2, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot2.html() == question.ScienceFiction && Comparison(RatioSpot2, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot2.html() == question.MysteryNovels && Comparison(RatioSpot2, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot2.html() == question.Biographys && Comparison(RatioSpot2, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot2.html() == question.MysteryNovels && Comparison(RatioSpot2, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot2.html() == question.MysteryNovels && Comparison(RatioSpot2, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot2.html() == question.TotalBooks && Comparison(RatioSpot2, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot2.html() == question.RockCDs && Comparison(RatioSpot2, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot2.html() == question.CountryCDs && Comparison(RatioSpot2, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot2.html() == question.RapCDs && Comparison(RatioSpot2, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot2.html() == question.RockCDs && Comparison(RatioSpot2, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot2.html() == question.RapCDs && Comparison(RatioSpot2, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot2.html() == question.TotalCDs && Comparison(RatioSpot2, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		RatioSpot3.draggable({
			revert: 'invalid'
		});
		RatioSpot3.data({
			'originalLeft': RatioSpot3.css('left'),
			'originalTop': RatioSpot3.css('top')
		});
		RatioSpot3.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot3.html() == question.ComedyDVDs && Comparison(RatioSpot3, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot3.html() == question.TotalDVDs && Comparison(RatioSpot3, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot3.html() == question.ActionDVDs && Comparison(RatioSpot3, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot3.html() == question.TotalDVDs && Comparison(RatioSpot3, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot3.html() == question.DocumentaryDVDs && Comparison(RatioSpot3, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot3.html() == question.TotalDVDs && Comparison(RatioSpot3, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot3.html() == question.ScienceFiction && Comparison(RatioSpot3, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot3.html() == question.MysteryNovels && Comparison(RatioSpot3, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot3.html() == question.Biographys && Comparison(RatioSpot3, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot3.html() == question.MysteryNovels && Comparison(RatioSpot3, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot3.html() == question.MysteryNovels && Comparison(RatioSpot3, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot3.html() == question.TotalBooks && Comparison(RatioSpot3, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot3.html() == question.RockCDs && Comparison(RatioSpot3, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot3.html() == question.CountryCDs && Comparison(RatioSpot3, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot3.html() == question.RapCDs && Comparison(RatioSpot3, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot3.html() == question.RockCDs && Comparison(RatioSpot3, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot3.html() == question.RapCDs && Comparison(RatioSpot3, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot3.html() == question.TotalCDs && Comparison(RatioSpot3, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		RatioSpot4.draggable({
			revert: 'invalid'
		});
		RatioSpot4.data({
			'originalLeft': RatioSpot4.css('left'),
			'originalTop': RatioSpot4.css('top')
		});
		RatioSpot4.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot4.html() == question.ComedyDVDs && Comparison(RatioSpot4, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot4.html() == question.TotalDVDs && Comparison(RatioSpot4, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot4.html() == question.ActionDVDs && Comparison(RatioSpot4, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot4.html() == question.TotalDVDs && Comparison(RatioSpot4, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot4.html() == question.DocumentaryDVDs && Comparison(RatioSpot4, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot4.html() == question.TotalDVDs && Comparison(RatioSpot4, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot4.html() == question.ScienceFiction && Comparison(RatioSpot4, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot4.html() == question.MysteryNovels && Comparison(RatioSpot4, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot4.html() == question.Biographys && Comparison(RatioSpot4, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot4.html() == question.MysteryNovels && Comparison(RatioSpot4, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot4.html() == question.MysteryNovels && Comparison(RatioSpot4, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot4.html() == question.TotalBooks && Comparison(RatioSpot4, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot4.html() == question.RockCDs && Comparison(RatioSpot4, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot4.html() == question.CountryCDs && Comparison(RatioSpot4, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot4.html() == question.RapCDs && Comparison(RatioSpot4, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot4.html() == question.RockCDs && Comparison(RatioSpot4, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot4.html() == question.RapCDs && Comparison(RatioSpot4, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot4.html() == question.TotalCDs && Comparison(RatioSpot4, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		RatioSpot5.draggable({
			revert: 'invalid'
		});
		RatioSpot5.data({
			'originalLeft': RatioSpot5.css('left'),
			'originalTop': RatioSpot5.css('top')
		});
		RatioSpot5.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot5.html() == question.ComedyDVDs && Comparison(RatioSpot5, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot5.html() == question.TotalDVDs && Comparison(RatioSpot5, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot5.html() == question.ActionDVDs && Comparison(RatioSpot5, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot5.html() == question.TotalDVDs && Comparison(RatioSpot5, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot5.html() == question.DocumentaryDVDs && Comparison(RatioSpot5, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot5.html() == question.TotalDVDs && Comparison(RatioSpot5, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot5.html() == question.ScienceFiction && Comparison(RatioSpot5, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot5.html() == question.MysteryNovels && Comparison(RatioSpot5, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot5.html() == question.Biographys && Comparison(RatioSpot5, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot5.html() == question.MysteryNovels && Comparison(RatioSpot5, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot5.html() == question.MysteryNovels && Comparison(RatioSpot5, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot5.html() == question.TotalBooks && Comparison(RatioSpot5, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot5.html() == question.RockCDs && Comparison(RatioSpot5, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot5.html() == question.CountryCDs && Comparison(RatioSpot5, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot5.html() == question.RapCDs && Comparison(RatioSpot5, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot5.html() == question.RockCDs && Comparison(RatioSpot5, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot5.html() == question.RapCDs && Comparison(RatioSpot5, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot5.html() == question.TotalCDs && Comparison(RatioSpot5, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		RatioSpot6.draggable({
			revert: 'invalid'
		});
		RatioSpot6.data({
			'originalLeft': RatioSpot6.css('left'),
			'originalTop': RatioSpot6.css('top')
		});
		RatioSpot6.mouseup(function() {
			question = Question[CurrentQuestionSet];
			if(CurrentQuestionSet === 0) {
				if(RatioSpot6.html() == question.ComedyDVDs && Comparison(RatioSpot6, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot6.html() == question.TotalDVDs && Comparison(RatioSpot6, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot6.html() == question.ActionDVDs && Comparison(RatioSpot6, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot6.html() == question.TotalDVDs && Comparison(RatioSpot6, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot6.html() == question.DocumentaryDVDs && Comparison(RatioSpot6, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot6.html() == question.TotalDVDs && Comparison(RatioSpot6, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 1) {
				if(RatioSpot6.html() == question.ScienceFiction && Comparison(RatioSpot6, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot6.html() == question.MysteryNovels && Comparison(RatioSpot6, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot6.html() == question.Biographys && Comparison(RatioSpot6, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot6.html() == question.MysteryNovels && Comparison(RatioSpot6, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot6.html() == question.MysteryNovels && Comparison(RatioSpot6, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot6.html() == question.TotalBooks && Comparison(RatioSpot6, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
			else if(CurrentQuestionSet === 2) {
				if(RatioSpot6.html() == question.RockCDs && Comparison(RatioSpot6, DropSpot1)) {
					Question1N = true;
					console.log("Question1N = ", Question1N);
				}
				else if(RatioSpot6.html() == question.CountryCDs && Comparison(RatioSpot6, DropSpot2)) {
					Question1D = true;
					console.log("Question1D = ", Question1D);
				}
				else if(RatioSpot6.html() == question.RapCDs && Comparison(RatioSpot6, DropSpot3)) {
					Question2N = true;
					console.log("Question2N = ", Question2N);
				}
				else if(RatioSpot6.html() == question.RockCDs && Comparison(RatioSpot6, DropSpot4)) {
					Question2D = true;
					console.log("Question2D = ", Question2D);
				}
				else if(RatioSpot6.html() == question.RapCDs && Comparison(RatioSpot6, DropSpot5)) {
					Question3N = true;
					console.log("Question3N = ", Question3N);
				}
				else if(RatioSpot6.html() == question.TotalCDs && Comparison(RatioSpot6, DropSpot6)) {
					Question3D = true;
					console.log("Question3D = ", Question3D);
				}
			}
		});
		DropSpot1.droppable({});
		DropSpot2.droppable({});
		DropSpot3.droppable({});
		DropSpot4.droppable({});
		DropSpot5.droppable({});
		DropSpot6.droppable({});
	});

	/**
	 * This function checks to make sure all of the  questions are equal to true, if so dynamically changes the page into a new problem.
	 */
	var checkAnswer = function() {
		var Correct = $('#Correct');
		if(CurrentQuestionSet === 2) {
			alert("Great job,  you are done with this lesson!");
		}
		else if(Question1N && Question1D && Question2N && Question2D && Question3N && Question3D && CurrentQuestionSet === 0) {
			setTimeout(function() {
				Question.newQuestion();
				console.log("CurrentQuestionSet = ", CurrentQuestionSet);
			}, 2000);
			CurrentQuestionSet++;

			Correct.css('display', 'block');
			Correct.css('background', 'orange');
			Correct.css('font-color', 'blue');
			Correct.text("You got them correct!");
		}
		else if(Question1N && Question1D && Question2N && Question2D && Question3N && Question3D && CurrentQuestionSet === 1) {
			setTimeout(function() {
				Question.newQuestion();
				$('#Description').text(Question[CurrentQuestionSet].prompt);
			}, 2000);
			CurrentQuestionSet++;

			Correct.css('display', 'block');
			Correct.css('background', 'orange');
			Correct.css('font-color', 'blue');
			Correct.text("You got them correct!");
		}
		else {
			setTimeout(function() {
				Correct.css('display', 'none');
			}, 2000);

			Correct.css('display', 'block');
			Correct.css('background', 'blue');
			Correct.css('font-color', 'orange');
			Correct.text("Try again!");
		}
	};

	/**
	 * Dynamically changes the page into a new question.
	 */
	Question["newQuestion"] = function() {
		var question = Question[CurrentQuestionSet];
		$('#Correct').css('display', 'none');

		Question1N = false;
		Question1D = false;
		Question2N = false;
		Question2D = false;
		Question3N = false;
		Question3D = false;

		console.log("Question1N = ", Question1N);
		console.log("Question1D = ", Question1D);
		console.log("Question2N = ", Question2N);
		console.log("Question2D = ", Question2D);
		console.log("Question3N = ", Question3N);
		console.log("Question3D = ", Question3D);

		var Question1 = $('#Question1');
		var Question2 = $('#Question2');
		var Question3 = $('#Question3');

		switch(CurrentQuestionSet) {
			case 1:
				RatioArray = ArrayShuffle(question.ScienceFiction, question.MysteryNovels, question.Biographys, question.TotalBooks, question.MysteryNovels, question.MysteryNovels);
				Question1.text("What is the ratio of science fiction novels to the mystery novels?");
				Question2.text("What is the ratio of biography novels to the mystery novels?");
				Question3.text("What is the ratio of mystery novels to the total amount of books?");
				break;
			case 2:
				RatioArray = ArrayShuffle(question.RockCDs, question.CountryCDs, question.RapCDs, question.RockCDs, question.RapCDs, question.TotalCDs);
				Question1.text("What is the ratio of rock CDs to country CDs?");
				Question2.text("What is the ratio of rap CDs to rock CDs?");
				Question3.text("What is the ratio of rap CDs to total CDs");
				break;
		}
		$('#Description').text(Question[CurrentQuestionSet].prompt);
	};

	$(document).on( {
		click: function() {
			checkAnswer();
			setTimeout(function() {
				//resets the answers to their original spots
				RatioSpot1.css({
					'left': RatioSpot1.data('originalLeft'),
					'top': RatioSpot1.data('originalTop')
				});
				RatioSpot2.css({
					'left': RatioSpot2.data('originalLeft'),
					'top': RatioSpot2.data('originalTop')
				});
				RatioSpot3.css({
					'left': RatioSpot3.data('originalLeft'),
					'top': RatioSpot3.data('originalTop')
				});
				RatioSpot4.css({
					'left': RatioSpot4.data('originalLeft'),
					'top': RatioSpot4.data('originalTop')
				});
				RatioSpot5.css({
					'left': RatioSpot5.data('originalLeft'),
					'top': RatioSpot5.data('originalTop')
				});
				RatioSpot6.css({
					'left': RatioSpot6.data('originalLeft'),
					'top': RatioSpot6.data('originalTop')
				});
			}, 2000);
		}
	}, "#Answer");
	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13) {
			checkAnswer();
			//resets the answers to their original spots
			setTimeout(function() {
				RatioSpot1.css({
					'left': RatioSpot1.data('originalLeft'),
					'top': RatioSpot1.data('originalTop')
				});
				RatioSpot2.css({
					'left': RatioSpot2.data('originalLeft'),
					'top': RatioSpot2.data('originalTop')
				});
				RatioSpot3.css({
					'left': RatioSpot3.data('originalLeft'),
					'top': RatioSpot3.data('originalTop')
				});
				RatioSpot4.css({
					'left': RatioSpot4.data('originalLeft'),
					'top': RatioSpot4.data('originalTop')
				});
				RatioSpot5.css({
					'left': RatioSpot5.data('originalLeft'),
					'top': RatioSpot5.data('originalTop')
				});
				RatioSpot6.css({
					'left': RatioSpot6.data('originalLeft'),
					'top': RatioSpot6.data('originalTop')
				});
			}, 2000);
		}
	});
	$(document).on({
		click: function() {
			//resets the answers to their original spots
			RatioSpot1.css({
				'left': RatioSpot1.data('originalLeft'),
				'top': RatioSpot1.data('originalTop')
			});
			RatioSpot2.css({
				'left': RatioSpot2.data('originalLeft'),
				'top': RatioSpot2.data('originalTop')
			});
			RatioSpot3.css({
				'left': RatioSpot3.data('originalLeft'),
				'top': RatioSpot3.data('originalTop')
			});
			RatioSpot4.css({
				'left': RatioSpot4.data('originalLeft'),
				'top': RatioSpot4.data('originalTop')
			});
			RatioSpot5.css({
				'left': RatioSpot5.data('originalLeft'),
				'top': RatioSpot5.data('originalTop')
			});
			RatioSpot6.css({
				'left': RatioSpot6.data('originalLeft'),
				'top': RatioSpot6.data('originalTop')
			});
		}
	}, "#Reset");
});