'use strict';

var Board = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'board', frame);

    // array to hold positions of all square on the board
    this.Row = 16;
    this.Col = 10;
    this.Grid = [this.Row, this.Col];

    for (var X = 0; X < this.Row; X++) for (var Y = 0; Y < this.Col; Y++) {
        if (this.Grid === 'undefined' || this.Grid === null) {
            this.Grid[X][Y] = 0;
        }
    }
  
};

Board.prototype = Object.create(Phaser.Sprite.prototype);
Board.prototype.constructor = Board;

Board.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Board;
