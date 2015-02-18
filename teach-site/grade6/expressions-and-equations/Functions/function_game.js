/**
 * Created by Trey on 2/15/2015.
 */

var FunctionGame = {};

FunctionGame.Preloader = function(game) {
	FunctionGame.GAME_WIDTH = 500;
	FunctionGame.GAME_HEIGHT = 400;
};
FunctionGame.Preloader.prototype = {
	preload: function() {
		//  Load any assets

		//  Load images
		this.load.image('background', 'img/png/background.png');
		this.load.image('floor', 'img/png/floor.png');
		this.load.image('ledge', 'img/png/ledge.png');

		//  Load spritesheets
		this.load.spritesheet('player', 'img/png/player.png', 28.4, 85);
	},
	create: function() {
		game.state.start('Game');
	}
};

FunctionGame.Game = function(game) {
	//  this will hold the player spritesheet
	this._player = null;
	this._playerRight = null;

	//  will hold the floor and ledges
	this._platforms = null;

	//  will our controls
	this._cursors = null;

	//  will hold answers
	this._answers = null;
};
FunctionGame.Game.prototype = {
	create: function() {
		//  start up this arcade physic system
		this.physics.startSystem(Phaser.Physics.ARCADE);

		//  place background in
		this.add.sprite(0, 0, 'background');

		this._platforms = this.add.group();

		this._platforms.enableBody = true;

		var floor = this._platforms.create(0, FunctionGame.GAME_HEIGHT - 35, 'floor');
		floor.body.immovable = true;

		var ledge = this._platforms.create(FunctionGame.GAME_WIDTH / 2, FunctionGame.GAME_HEIGHT / 2, 'ledge');
		ledge.body.immovable = true;

		ledge = this._platforms.create(FunctionGame.GAME_WIDTH - 96, FunctionGame.GAME_HEIGHT / 2, 'ledge');
		ledge.body.immovable = true;

		ledge = this._platforms.create(0, FunctionGame.GAME_HEIGHT / 2, 'ledge');
		ledge.body.immovable = true;

		ledge = this._platforms.create(FunctionGame.GAME_WIDTH / 2 - 125, FunctionGame.GAME_HEIGHT / 2 - 100, 'ledge');
		ledge.body.immovable = true;

		this._answers = this.add.group();

		this._answers.enableBody = true;

		this.setAnswers();

		this._player = this.add.sprite(FunctionGame.GAME_WIDTH / 2 - 24, FunctionGame.GAME_HEIGHT / 2 + 30, 'player', 0);

		this.physics.arcade.enable(this._player);
		this._player.body.bounce.y = 0.3;
		this._player.body.gravity.y = 300;

		this._player.body.collideWorldBounds = true;

		//  add me some animations
		this._player.animations.add('right', [1, 2, 3], 10, true);
		this._player.animations.add('left', [4, 5, 6], 10, true);

		this._cursors = this.input.keyboard.createCursorKeys();
	},

	update: function() {
		this.physics.arcade.collide(this._player, this._platforms);

		if(this.checkCollision(this._player, this._answers.getAt(0))) {
			this.checkAnswer(this._answers.getAt(0).text);
		}
		else if(this.checkCollision(this._player, this._answers.getAt(1))) {
			this.checkAnswer(this._answers.getAt(1).text);
		}
		else if(this.checkCollision(this._player, this._answers.getAt(2))) {
			this.checkAnswer(this._answers.getAt(2).text);
		}
		else if(this.checkCollision(this._player, this._answers.getAt(3))) {
			this.checkAnswer(this._answers.getAt(3).text);
		}

		this._player.body.velocity.x = 0;

		if(this._cursors.left.isDown) {
			//  move to the left
			this._player.body.velocity.x = -150;

			this._player.animations.play('left');

			this._playerRight = false;
		}
		else if(this._cursors.right.isDown) {
			//  move to the right
			this._player.body.velocity.x = 150;

			this._player.animations.play('right');

			this._playerRight = true;
		}
		else {
			//  Stand still
			this._player.animations.stop();

			if(this._playerRight) {
				this._player.frame = 1;
			}
			else {
				this._player.frame = 4;
			}
		}

		//  Allow the player to jump if they are touching the ground.
		if(this._cursors.up.isDown && this._player.body.touching.down) {
			this._player.body.velocity.y = -350;
		}
	},

	checkAnswer: function(answer) {

		var functionQuestion = FunctionQuestion.Questions;

		if(answer === functionQuestion._randomCoeffecient + "x + "+functionQuestion._randomConstant) {
			this.gotCorrect(true);
		}
		else {
			this.gotCorrect(false);
		}

		this.resetProblem();
	},

	resetProblem: function() {
		this._answers.removeChildren();

		FunctionQuestion.Questions.createTable();

		this.setAnswers();

		this._player.x = FunctionGame.GAME_WIDTH / 2 - 24;
		this._player.y = FunctionGame.GAME_HEIGHT / 2 + 30;
		this._player.frame = 0;
	},

	setAnswers: function() {
		var functionQuestion = FunctionQuestion.Questions;

		var answerPositions = [[(FunctionGame.GAME_WIDTH / 2 - 105), (FunctionGame.GAME_HEIGHT / 2 - 150)],
								[10, (FunctionGame.GAME_HEIGHT - 100)],
								[(FunctionGame.GAME_WIDTH / 2 + 10), (FunctionGame.GAME_HEIGHT / 2 - 35)],
								[(FunctionGame.GAME_WIDTH - 80), (FunctionGame.GAME_HEIGHT / 2 - 35)]];

		var differentAnswers = [functionQuestion._randomCoeffecient + "x + " + functionQuestion._randomConstant,
								(functionQuestion._randomCoeffecient - 1) + "x + " + functionQuestion._randomConstant,
								functionQuestion._randomCoeffecient + "x + " + (functionQuestion._randomConstant + 4),
								(functionQuestion._randomCoeffecient + 3) + "x + " + (functionQuestion._randomConstant - 1)];

		var randomPosition = FunctionQuestion.Utilities.randomNumber(0, answerPositions.length - 1);
		var randomAnswer = FunctionQuestion.Utilities.randomNumber(0, differentAnswers.length - 1);

		var answers = this.add.text(answerPositions[randomPosition][0], answerPositions[randomPosition][1], differentAnswers[randomAnswer],
			{fontSize: '25px', fill: '#FF8C0B'});
		this._answers.add(answers);

		answerPositions.splice(randomPosition, 1);
		differentAnswers.splice(randomAnswer, 1);

		randomPosition = FunctionQuestion.Utilities.randomNumber(0, answerPositions.length - 1);
		randomAnswer = FunctionQuestion.Utilities.randomNumber(0, differentAnswers.length - 1);

		answers = this.add.text(answerPositions[randomPosition][0], answerPositions[randomPosition][1], differentAnswers[randomAnswer],
			{fontSize: '25px', fill: '#FF8C0B'});
		this._answers.add(answers);

		answerPositions.splice(randomPosition, 1);
		differentAnswers.splice(randomAnswer, 1);

		randomPosition = FunctionQuestion.Utilities.randomNumber(0, answerPositions.length - 1);
		randomAnswer = FunctionQuestion.Utilities.randomNumber(0, differentAnswers.length - 1);

		answers = this.add.text(answerPositions[randomPosition][0], answerPositions[randomPosition][1], differentAnswers[randomAnswer],
			{fontSize: '25px', fill: '#FF8C0B'});
		this._answers.add(answers);

		answerPositions.splice(randomPosition, 1);
		differentAnswers.splice(randomAnswer, 1);

		randomPosition = FunctionQuestion.Utilities.randomNumber(0, answerPositions.length - 1);
		randomAnswer = FunctionQuestion.Utilities.randomNumber(0, differentAnswers.length - 1);

		answers = this.add.text(answerPositions[randomPosition][0], answerPositions[randomPosition][1], differentAnswers[randomAnswer],
			{fontSize: '25px', fill: '#FF8C0B'});
		this._answers.add(answers);
	},

	checkCollision: function(player, answer) {
		return Phaser.Rectangle.intersects(player.getBounds(), answer.getBounds());
	},

	gotCorrect: function(gotCorrect) {
		if(gotCorrect) {
			sweetAlert({
				title: "You did well,",
				text: "child.",
				type: "success",
				timer: 3000
			});
		}
		else {
			sweetAlert({
				title: "Try again",
				text: "you will get it!",
				type: "error",
				timer: 3000
			});
		}
	}
};