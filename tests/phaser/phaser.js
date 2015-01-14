/**
 * Created by Trey on 1/13/2015.
 *
 * Notes:
 * if         45 <= this._player.angle <= 135                                           then the head is facing right.
 * if         136 <= this._player.angle <= 179 || -180 <= this._player.angle <= -147    then the head is facing down
 * if         -146 <= this._player.angle <= -58                                         then the head is facing left
 * if         -57 <= this._player.angle <= 44                                           then the head is facing up
 */

var Grid = {};

Grid.Preloader = function(game){
	Grid.GRID_WIDTH = 800;

	Grid.GRID_HEIGHT = 600;
};

Grid.Preloader.prototype = {
	preload: function() {
		//  Load any needed images
		this.load.image('player', 'TeachCharacter.png');

		this.load.image('background', 'coordinateGrid.png');

		this.load.image('transparentPoint', 'transparentPoint.png');
		this.load.image('pointer', 'point.png');
	},
	create: function() {
		this.state.start('Game');
	}
};

Grid.Game = function(game) {
	//  needed variables for Grid.Game
	this._player = null;

	//  key controls such as up down left right
	this._playerMove = null;

	//  hot key to rotate player clockwise
	this._rotateKey = null;

	//points on a grid
	this._transparentPointGroup = null;
};

Grid.Game.prototype = {
	create: function() {
		//  Start physics engine
		this.physics.startSystem(Phaser.Physics.ARCADE);

		this.add.sprite(0, 0, 'background');

		this._player = this.add.sprite(Grid.GRID_WIDTH / 2 + 2, Grid.GRID_HEIGHT / 2 + 7, 'player');

		this._player.anchor.setTo(0.5, 0.5);

		//this.physics.enable(this._player, Phaser.Physics.ARCADE);

		this._transparentPointGroup = this.add.group();

		var transparentPoint;

		for(var i = 0; i <= 800; i += 50) {
			for(var j = 0; j <= 600; j += 50) {
				transparentPoint = this.add.button(i-15, j-15, 'transparentPoint', this.moveCharacter, this);

				this._transparentPointGroup.add(transparentPoint);
			}
		}

		this._rotateKey = this.input.keyboard.addKey(Phaser.Keyboard.R);
	},

	moveCharacter: function(point) {
		this._player.x = point.x + 15;

		this._player.y = point.y + 25;

		this._pointFeet.x = this._player.x - 4;

		this._pointFeet.y = this._player.y + 18;

		this._pointHead.x = this._player.x - 4;

		this._pointHead.y = this._player.y - 33;
	},

	update: function() {
		if(this._rotateKey.isDown) {
			console.log(this._player.angle);
			this._player.angle += 1;
		}
	}
};