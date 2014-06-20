'use strict';
var Block = require('../prefabs/block');
var Tetromino = function (game, x, y, type, frame) {
    Phaser.Group.call(this, game);

    this.blockSize = 24;
    x = x * this.blockSize;
    y = y * this.blockSize;
    this.coords = this.get(type);

    for (var i = 0; i < 4; i++) {
        var blockSprite = new Block(game, x + (this.coords[i][0] * this.blockSize), y + (this.coords[i][1] * this.blockSize), type);
        game.add.sprite(blockSprite);
    }

};

Tetromino.prototype = Object.create(Phaser.Group.prototype);
Tetromino.prototype.constructor = Tetromino;

Tetromino.prototype.update = function () {

    // write your prefab's specific update code here

};

Tetromino.prototype.get = function(type){

    /*
     Holds the coordinates of the individual blocks that make up the tetromino.
     */
    var baseCoords;

    /*
     Return the base coords according to the type passed
      */
    switch (type) {
        case 'I':
            /*
                    0, 1, 2, 3
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [2,0] ],
                [ [3], [3,0] ]
            ];
            break;
        case 'T':
            /*
                       0,
                    1, 2, 3
             */
            baseCoords = [
                [ [0], [1,0] ],
                [ [1], [0,1] ],
                [ [2], [1,1] ],
                [ [3], [2,1] ]
            ];
            break;
        case 'O':
            /*
                    0, 1,
                    2, 3,
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [0,1] ],
                [ [3], [1,1] ]
            ];
            break;
        case 'S':
            /*
                       0, 1,
                    2, 3
             */
            baseCoords = [
                [ [0], [1,0] ],
                [ [1], [2,0] ],
                [ [2], [0,1] ],
                [ [3], [1,1] ]
            ];
            break;
        case 'Z':
            /*
                    0, 1,
                       2, 3
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [1,1] ],
                [ [3], [2,1] ]
            ];
            break;
        case 'J':
            /*
                    0, 1, 2,
                          3
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [2,0] ],
                [ [3], [2,1] ]
            ];
            break;
        case 'blueBlock':
            /*
                    0, 1, 2,
                    3
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [2,0] ],
                [ [3], [0,1] ]
            ];
            break;
    }

    return baseCoords;
};

module.exports = Tetromino;
