/**
 * Created by Trey on 1/13/2015.
 *
 * To do:
 *
 * Find a way to dynamically change questions, check to see if reflection, rotation and translation is all correct.
 */

var Grid = {};

Grid.Preloader = function (game) {
	Grid.GRID_WIDTH = 800;

	Grid.GRID_HEIGHT = 600;
};

Grid.Preloader.prototype = {
	preload: function () {
		//  Load any needed images
		this.load.image ('player', 'TeachCharacter.png');

		this.load.image ('background', 'coordinateGrid.png');

		this.load.image ('transparentPoint', 'transparentPoint.png');
	},

	create: function () {
		this.state.start ('Game');
	}
};

Grid.Game = function (game) {
	//  needed variables for Grid.Game
	this._player = null;

	//  key controls such as up down left right
	this._playerMove = null;

	//  hot key to rotate player clockwise
	this._rotateKey = null;

	// points on a grid
	this._transparentPointGroup = null;

	//  Pointer to tell which way head is pointing
	this._headUp = null;

	this._headDown = null;

	this._headRight = null;

	this._headLeft = null;
};

Grid.Game.prototype = {
	create: function () {
		//  Start physics engine
		//this.physics.startSystem (Phaser.Physics.ARCADE);

		this.add.sprite (0, 0, 'background');

		this._headUp = false;

		this._headDown = false;

		this._headRight = false;

		this._headLeft = false;

		this._player = this.add.sprite (Grid.GRID_WIDTH / 2 + 2, Grid.GRID_HEIGHT / 2 + 7, 'player');

		this._player.anchor.setTo (0.5, 0.5);

		//this.physics.enable(this._player, Phaser.Physics.ARCADE);

		this._transparentPointGroup = this.add.group ();

		var transparentPoint;

		for (var i = 0; i <= 800; i += 50) {
			for (var j = 0; j <= 600; j += 50) {
				transparentPoint = this.add.button (i - 15, j - 15, 'transparentPoint', this.moveCharacter, this);

				this._transparentPointGroup.add (transparentPoint);
			}
		}

		this._rotateKey = this.input.keyboard.addKey (Phaser.Keyboard.R);
	},

	moveCharacter: function (point) {
		this._player.x = point.x + 15;

		this._player.y = point.y + 25;
	},

	update: function () {
		if (this._rotateKey.isDown) {
			this._player.angle += 1;

			this.checkHeadDirection ();
		}
	},

	checkHeadDirection: function () {
		if (this._player.angle >= -45 && this._player.angle <= 44) {
			this._headUp = true;

			this._headDown = false;

			this._headRight = false;

			this._headLeft = false;

			console.log ("this._headUp = ", this._headUp);
		}
		if ((this._player.angle >= 136 && this._player.angle <= 179) || (this._player.angle >= -180 && this._player.angle <= -135)) {
			this._headUp = false;

			this._headDown = true;

			this._headRight = false;

			this._headLeft = false;

			console.log ("this._headDown = ", this._headDown);
		}
		else if (this._player.angle >= 45 && this._player.angle <= 135) {
			this._headUp = false;

			this._headDown = false;

			this._headRight = true;

			this._headLeft = false;

			console.log ("this._headRight = ", this._headRight);
		}
		else if (this._player.angle >= -136 && this._player.angle <= -44) {
			this._headUp = false;

			this._headDown = false;

			this._headRight = false;

			this._headLeft = true;

			console.log ("this._headLeft = ", this._headLeft);
		}
	}
};