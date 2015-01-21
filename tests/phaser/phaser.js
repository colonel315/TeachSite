/**
 * Created by Trey on 1/13/2015.
 *
 * To do:
 *
 * Find a way to dynamically change questions, check to see if reflection, rotation and translation is all correct.
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

	//  Pointer to tell which way head is pointing
	Grid._headUp = null;

	Grid._headDown = null;

	//  Displays questions on screen.
	Grid._question = null;

	//  Keeps what question user is on
	Grid._questionNumber = 0;

	//  Randomly decides if a question will ask user to rotate, translate, or reflect
	//  0 = translate, 1 = reflect
	Grid._questionType = 0;

	//  Will help to check users answer for reflect and rotate.
	//  0 = up, 1 = down
	Grid._headDirection = null;
};

Grid.Game.prototype = {
	create: function() {
		//  Start physics engine
		//this.physics.startSystem (Phaser.Physics.ARCADE);

		this.add.sprite(0, 0, 'background');

		Grid._headUp = false;

		Grid._headDown = false;

		this._player = this.add.sprite(Grid.GRID_WIDTH / 2 + 2, Grid.GRID_HEIGHT / 2 + 7, 'player');

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
		this._player.x = point.x + 15;
		this._player.y = point.y + 25;
	},

	update: function() {
		if(this._reflectKey.isDown) {
			this._player.scale.y *= -1;

			Grid.Question.checkHeadDirection(this);
		}
	}
};

Grid.Question = {
	checkHeadDirection: function(game) {
		if(game._player.angle >= -45 && game._player.angle <= 44) {
			Grid._headUp = true;

			Grid._headDown = false;

			Grid._headDirection = 0;
		}
		else if((game._player.angle >= 136 && game._player.angle <= 179) || (game._player.angle >= -180 && game._player.angle <= -135)) {
			Grid._headUp = false;

			Grid._headDown = true;

			Grid._headDirection = 1;
		}
	},

	generateQuestion: function(game) {
		switch(Grid._questionNumber) {
			case 0:
				game.add.text(10, 610, "");
				break;
		}
	},

	checkQuestion: function(game) {

	}
};