(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(320, 480, Phaser.AUTO, 'tetris-clone');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(require,module,exports){
'use strict';

var Tetromino = function (game, x, y, colour, frame) {
    Phaser.Sprite.call(this, game, x, y, colour, frame);

    // initialize your prefab here
    this.anchor.setTo(0.5, 0.5);

};

Tetromino.prototype = Object.create(Phaser.Sprite.prototype);
Tetromino.prototype.constructor = Tetromino;

Tetromino.prototype.update = function () {

    // write your prefab's specific update code here

};

module.exports = Tetromino;

},{}],3:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],4:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],5:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;

},{}],6:[function(require,module,exports){
'use strict';
var Tetromino = require('../prefabs/tetromino');
function Play() {
}
Play.prototype = {
    create: function () {

         // add the background sprite
        this.background = this.game.add.sprite(0, 0, 'tetris_bg');

        this.tetromino = new Tetromino(this.game, 100, 100, 'blueBlock', [ [0, 0], [24, 0], [48, 0], 48, 24 ]);


        var blueGroup = this.game.add.group();

        for (var i = 0; i < 4; i++) {
            var tetromino = new Tetromino(this.game, this.game.world.randomX, this.game.world.randomY, 'blueBlock');
            blueGroup.add(tetromino);
        }

        /*
         this.blueGroup.add(this.blue1);
         this.blueGroup.add(this.blue2);
         this.blueGroup.add(this.blue3);
         this.blueGroup.add(this.blue4);

         */
    },
    update: function () {

    },
    clickListener: function () {

    }
};

module.exports = Play;
},{"../prefabs/tetromino":2}],7:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    /*

     */
    this.load.image('redBlock', 'assets/red.png');
    this.load.image('orangeBlock', 'assets/orange.png');
    this.load.image('yellowBlock', 'assets/yellow.png');
    this.load.image('greenBlock', 'assets/green.png');
    this.load.image('blueBlock', 'assets/blue.png');
    this.load.image('cyanBlock', 'assets/cyan.png');
    this.load.image('magentaBlock', 'assets/magenta.png');

    this.load.image('background', 'assets/background.jpg');
    this.load.image('tetris_bg', 'assets/tetris_bg.jpg');
    this.load.image('gameover', 'assets/gameover.jpeg');

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
        this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])