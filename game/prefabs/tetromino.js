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

Tetromino.prototype.get = function(type){

    /*
     holds the coordinates of the individual blocks that make up the tetromino

     'I': baseCoords = [0][0,0],
                       [1][1,0],
                       [2][2,0],
                       [3][3,0];

     'T': baseCoords = [0][0,0],
                       [1][1,0],
                       [2][0,1],
                       [3][1,1];

     'O': baseCoords = [0][0,0],
                       [1][1,0],
                       [2][0,1],
                       [3][1,1];

     'S': baseCoords = [0][0,0],
                       [1][1,0],
                       [2][1,1],
                       [3][1,2];

     'Z': baseCoords = [0][1,0],
                       [1][1,1],
                       [2][0,1],
                       [3][0,2];

     'J': baseCoords = [0][0,1],
                       [1][1,1],
                       [2][1,0],
                       [3][2,0];

     'L': baseCoords = [0][0,0],
                       [1][1,0],
                       [2][2,0],
                       [3][2,1];
     */
    var baseCoords = [];



    // generate the base coords according to the type passed
    switch (type) {
        case 'I':

            break;
        case 'T':
            break;
        case 'O':
            break;
        case 'S':
            break;
        case 'Z':
            break;
        case 'J':
            break;
        case 'L':
            break;
    }
};

module.exports = Tetromino;
