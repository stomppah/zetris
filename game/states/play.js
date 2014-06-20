'use strict';
var Board = require('../prefabs/board');
var Tetromino = require('../prefabs/tetromino');
function Play() {
}
Play.prototype = {
    create: function () {

         // add the background sprite
        this.background = this.game.add.sprite(0, 0, 'tetris_bg');

        var blueGroup = new Tetromino(this.game, 4, 4, 'blueBlock');

        this.game.add.group(blueGroup);
    },
    update: function () {

    },
    clickListener: function () {

    }
};

module.exports = Play;