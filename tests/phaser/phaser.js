/**
 * Created by Trey on 1/13/2015.
 *
 * To do:
 *
 *  Add questions
 *
 *  Notes to self:
 *
 *  When flipping x is always 5 less from point
 *  When Y is up it is 35 more from point
 *  When Y is down it is 15 less from point
 */

var Grid = {};

Grid.Preloader = function(game) {
	Grid.GRID_WIDTH = 800;
	Grid.GRID_HEIGHT = 600;
};

Grid.Preloader.prototype = {
	preload: function() {
		//  Load any needed images
		this.load.image('player', 'TeachCharacter.png');
		this.load.image('background', 'coordinateGrid.png');
		this.load.image('transparentPoint', 'transparentPoint.png');
	},

	create: function() {
		this.state.start('Game');
	}
};

Grid.Game = function(game) {
	//  needed variables for Grid.Game
	this._player = null;

	//  hot key to rotate player clockwise
	this._reflectKey = null;

	//  hot key to check answer
	this._checkKey = null;

	//  points on a grid
	this._transparentPointGroup = null;

	//  Displays questions on screen.
	Grid._question = null;

	//  Keeps what question user is on
	Grid._questionNumber = 0;

	//  Randomly decides if a question will ask user to rotate, translate, or reflect
	//  0 = reflect, 1 = translate
	Grid._questionType = 0;

	//  Will help to check if head is up or down
	Grid._headUp = null;

	//  Will flag if key is down
	Grid._keyDown = null;

	//  Will keep track of how far user is from the edge of a graph
	Grid._distanceTop = 0;
	Grid._distanceBottom = 0;
	Grid._distanceRight = 0;
	Grid._distanceLeft = 0;

	//  Needed to check if user is correct about distance translated
	Grid._distanceToTranslate = 0;

	//  Needed to check if reflection is correct
	Grid._startingX = 0;
	Grid._startingY = 0;
	Grid._startingUp = null;

	//  Flag to know if reflecting over X or Y axis False = x, True = y
	Grid._flip = null;
};

Grid.Game.prototype = {
	create: function() {
		//  Start physics engine
		//this.physics.startSystem (Phaser.Physics.ARCADE);

		this.add.sprite(0, 0, 'background');

		Grid._keyDown = false;
		Grid._headUp = true;
		Grid._startingUp = true;
		Grid._question = this.add.text(10, 610, "");

		this._player = this.add.sprite(Grid.GRID_WIDTH / 2 - 5, Grid.GRID_HEIGHT / 2 + 35, 'player');
		this._player.anchor.setTo(0.5, 1);

		Grid._distanceRight = (Grid.GRID_WIDTH - (this._player.x + 5));
		Grid._distanceLeft = (Grid.GRID_WIDTH - Grid._distanceRight);
		Grid._distanceBottom = (Grid.GRID_HEIGHT - (this._player.y - 35));
		Grid._distanceTop = (Grid.GRID_HEIGHT - Grid._distanceBottom);

		this._transparentPointGroup = this.add.group();

		var transparentPoint;

		for(var i = 0; i <= 800; i += 50) {
			for(var j = 0; j <= 600; j += 50) {
				transparentPoint = this.add.button(i - 15, j - 15, 'transparentPoint', this.moveCharacter, this);

				this._transparentPointGroup.add(transparentPoint);
			}
		}

		this._reflectKey = this.input.keyboard.addKey(Phaser.Keyboard.R);

		this._checkKey = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this._checkKey.onDown.add(this.checkQuestion, this);

		Grid.Question.generateQuestion(this);
	},

	moveCharacter: function(point) {
		if(Grid._headUp) {
			this._player.x = point.x + 10;
			this._player.y = point.y + 50;
		}
		else {
			this._player.x = point.x + 15;
			this._player.y = point.y;
		}

		Grid._distanceRight = (Grid.GRID_WIDTH - (this._player.x + 5));
		Grid._distanceLeft = (Grid.GRID_WIDTH - Grid._distanceRight);

		if(Grid._headUp) {  // if head is facing up then take 35 away
			Grid._distanceBottom = (Grid.GRID_HEIGHT - (this._player.y - 35));
		}
		else {  //  else add 15
			Grid._distanceBottom = (Grid.GRID_HEIGHT - (this._player.y + 15));
		}

		Grid._distanceTop = (Grid.GRID_HEIGHT - Grid._distanceBottom);
	},

	update: function() {
		if(this._reflectKey.isDown) {   //  if key is down, keyDown = true
			Grid._keyDown = true;
		}
		else if(this._reflectKey.isUp) {
			if(Grid._keyDown) { //  if keyDown is true
				this._player.scale.y *= -1; //  flip character

				if(Grid._headUp) {  //  if head is up
					this._player.y -= 50;   //  move character up 50 pixels

					Grid._headUp = false;   //  head is not up anymore

					Grid._distanceBottom = (Grid.GRID_HEIGHT - (this._player.y + 15));
				}
				else {  //  if head is down
					this._player.y += 50;   //  move character down 50 pixels

					Grid._headUp = true;    //  head is now up

					Grid._distanceBottom = (Grid.GRID_HEIGHT - (this._player.y - 35));
				}

				Grid._keyDown = false;  //  key is not down anymore

				Grid._distanceRight = (Grid.GRID_WIDTH - (this._player.x + 5));
				Grid._distanceLeft = (Grid.GRID_WIDTH - Grid._distanceRight);

				Grid._distanceTop = (Grid.GRID_HEIGHT - Grid._distanceBottom);
			}
		}
	},

	checkQuestion: function() {
		switch(Grid._questionType) {
			case 0:
				if(Grid._flip) {    //  user should reflect over y axis
					if(Grid._startingUp != Grid._headUp && !Grid._headUp && Grid._startingY === 300 &&
						(this._player.y + 15) === 300 && Grid._startingX === 400 && (this._player.x + 5) === 400) {

						Grid.Utilities.fadeText();

						Grid._startingUp = Grid._headUp;

						setTimeout(function() {
							Grid.Question.generateQuestion(this);
						}, 3500);
					}
					else if(Grid._startingUp != Grid._headUp && Grid._headUp && Grid._startingY === 300 &&
						(this._player.y - 35) === 300 && Grid._startingX === 400 && (this._player.x + 5) === 400) {

						Grid.Utilities.fadeText();

						Grid._startingUp = Grid._headUp;

						setTimeout(function() {
							Grid.Question.generateQuestion(this);
						}, 3500);
					}

					var distanceFromYAxis;
					if(Grid._startingY < 300) {
						distanceFromYAxis = Grid.GRID_HEIGHT - Grid._startingY;
					}
				}
				else {              //  user should reflect over x axis
					if(Grid._startingX === 400 && (this._player.x + 5) === 400 && Grid._startingY === 300 &&
						(this._player.y - 35) === 300) {
						Grid.Utilities.fadeText();

						setTimeout(function() {
							Grid.Question.generateQuestion(this);
						}, 3500);
					}
				}
		}

		//  Need to know the new starting position
		Grid._startingX = this._player.x + 5;

		if(Grid._headUp) {
			Grid._startingY = this._player.y - 35;
		}
		else {
			Grid._startingY = this._player.y + 15;
		}
	}
};

Grid.Question = {
	generateQuestion: function() {
		//Grid._questionType = Math.round(Math.random());

		Grid._questionType = 0;

		var randomNum = Math.random();

		switch(Grid._questionType) {
			case 0:     //  Reflection question
				if(randomNum >= 0.5) {  // If true will ask student to reflect character across y axis
					if(randomNum >= 0.5) {  //  if true will ask across y axis
						Grid._question.text = "Reflect the character across the y axis";
					}
					else {  // else will say horizontally
						Grid._question.text = "Reflect the character vertically";
					}

					Grid._flip = true;
				}
				else {  //  else will tell student to reflect across x axis
					if(randomNum >= 0.5) {  //  if true will say x axis
						Grid._question.text = "Reflect the character across the x axis";
					}
					else {  //  else will say vertically
						Grid._question.text = "Reflect the character horizontally";
					}

					Grid._flip = false;
				}

				break;

			case 1:     //  translation question
				//Helps decide what kind of question it will be.
				var distances = [Grid._distanceTop / 50, Grid._distanceBottom / 50, Grid._distanceRight / 50, Grid._distanceLeft / 50];

				var translationDirection;

				while(true) {
					translationDirection = Grid.Utilities.getRandom(0, distances.length-1);

					if(distances[translationDirection] > 0) {   //  Checks to see if moving is possible
						Grid._distanceToTranslate = Grid.Utilities.getRandom(1, distances[translationDirection]);

						if(translationDirection === 0) {        //  If true will ask user to translate/move up
							if(randomNum >= 0.5) {              //  Ask user to translate
								Grid._question.text = "Translate the character up " + Grid._distanceToTranslate;
							}
							else {                              //  Ask user to move
								Grid._question.text = "Move the character up " + Grid._distanceToTranslate;
							}
						}
						if(translationDirection === 1) {        //  If true will ask user to translate/move down
							if(randomNum >= 0.5) {              //  Ask user to translate
								Grid._question.text = "Translate the character down " + Grid._distanceToTranslate;
							}
							else {                              //  Ask user to move
								Grid._question.text = "Move the character down " + Grid._distanceToTranslate;
							}
						}
						if(translationDirection === 2) {        //  If true will ask user to translate/move right
							if(randomNum >= 0.5) {              //  Ask user to translate
								Grid._question.text = "Translate the character right " + Grid._distanceToTranslate;
							}
							else {                              //  Ask user to move
								Grid._question.text = "Move the character right " + Grid._distanceToTranslate;
							}
						}
						if(translationDirection === 3) {        //  If true will ask user to translate/move left
							if(randomNum >= 0.5) {              //  Ask user to translate
								Grid._question.text = "Translate the character left " + Grid._distanceToTranslate;
							}
							else {                              //  Ask user to move
								Grid._question.text = "Move the character left " + Grid._distanceToTranslate;
							}
						}

						break;
					}
				}

				break;
		}
	}
};

Grid.Utilities = {
	/**
	 * Will be used to provide a random distance, and a random array number for translation question.
	 * @param min
	 * @param max
	 * @returns {number}
	 */
	getRandom: function(min, max) {
		console.log("got in getRandomDistance");
		return Math.round(Math.random() * (max - min) + min);
	},

	/**
	 * Fades the text in x amount of time
	 * @param game
	 */
	fadeText: function() {
		var gotCorrect = $('#gotCorrect');

		gotCorrect.css('display', 'block');

		gotCorrect.fadeOut(3000);
	}
};

function resizeGame(game) {
	//var width = $(window).width();
	//var height = $(window).height();

	game.width = $(window).width();
	game.height = $(window).height();

	//game.stage.bounds.width = width;
	//game.stage.bounds.height = height;

	//if (game.renderType === Phaser.WEBGL) {
	//	game.renderer.resize(width, height);
	//}
}