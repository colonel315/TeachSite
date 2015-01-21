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

	//  points on a grid
	this._transparentPointGroup = null;

	//  Displays questions on screen.
	Grid._question = null;

	//  Keeps what question user is on
	Grid._questionNumber = 0;

	//  Randomly decides if a question will ask user to rotate, translate, or reflect
	//  0 = translate, 1 = reflect
	Grid._questionType = 0;

	//  Will help to check if head is up or down
	Grid._headUp = null;

	//  Will flag if key is down
	Grid._keyDown = null;
};

Grid.Game.prototype = {
	create: function() {
		//  Start physics engine
		//this.physics.startSystem (Phaser.Physics.ARCADE);

		this.add.sprite(0, 0, 'background');

		Grid._keyDown = false;
		Grid._headUp = true;

		this._player = this.add.sprite(Grid.GRID_WIDTH / 2 - 5, Grid.GRID_HEIGHT / 2 + 35, 'player');
		this._player.anchor.setTo(0.5, 1);

		//this.physics.enable(this._player, Phaser.Physics.ARCADE);

		this._transparentPointGroup = this.add.group();

		var transparentPoint;

		for(var i = 0; i <= 800; i += 50) {
			for(var j = 0; j <= 600; j += 50) {
				transparentPoint = this.add.button(i - 15, j - 15, 'transparentPoint', this.moveCharacter, this);

				this._transparentPointGroup.add(transparentPoint);
			}
		}

		this._reflectKey = this.input.keyboard.addKey(Phaser.Keyboard.R);

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
				}
				else {  //  if head is down
					this._player.y += 50;   //  move character down 50 pixels

					Grid._headUp = true;    //  head is now up
				}

				Grid._keyDown = false;  //  key is not down anymore
			}
		}
	}
};

Grid.Question = {
	generateQuestion: function(game) {
		Grid._questionType = 0;

		if(Grid._questionType) {    // if true will be reflection question
			if(Math.random() >= 0.5) {  // If true will ask student to reflect character across y axis
				if(Math.random() >= 0.5) {  //  if true will ask across y axis
					game.add.text(10, 610, "Reflect the character across the y axis");
				}
				else {  // else will say horizontally
					game.add.text(10, 610, "Reflect the character horizontally");
				}
			}
			else {  //  else will tell student to reflect across x axis
				if(Math.random() >= 0.5) {  //  if true will say x axis
					game.add.text(10, 610, "Reflect the character across the x axis");
				}
				else {  //  else will say vertically
					game.add.text(10, 610, "Reflect the character vertically");
				}
			}
		}
		else {  //  else will be translation question
			var distanceRight = Grid.GRID_WIDTH - (game._player.x + 5);
			var distanceLeft = Grid.GRID_WIDTH - distanceRight;

			var distanceBottom;
			if(Grid._headUp) {
				distanceBottom = Grid.GRID_HEIGHT - (game._player.y - 35);
			}
			else {
				distanceBottom = Grid.GRID_HEIGHT - (game._player.y + 15);
				console.log("distanceBottom = ", distanceBottom);
			}
		}
	},

	checkQuestion: function(game) {

	}
};