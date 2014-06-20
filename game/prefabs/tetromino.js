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
        case 'L':
            /*
                    0, 1, 2,
                    3
             */
            baseCoords = [
                [ [0], [0,0] ],
                [ [1], [1,0] ],
                [ [2], [2,0] ],
                [ [3], [0,1] ]
            ]
            break;
    }

    return baseCoords;
};

module.exports = Tetromino;
