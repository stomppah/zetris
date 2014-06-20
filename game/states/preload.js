
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
