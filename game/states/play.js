'use strict';
var Board = require('../prefabs/board');
var Tetromino = require('../prefabs/tetromino');
function Play() {
}
Play.prototype = {
    BlockSize: 24,
    create: function () {

         // add the background sprite
        this.background = this.game.add.sprite(0, 0, 'tetris_bg');

        var blueGroup = this.game.add.group();

        for (var i = 0; i < 4; i++) {
            var tetromino = new Tetromino(this.game, this.game.world.randomX, this.game.world.randomY, 'blueBlock');
            blueGroup.add(tetromino);
        }

    },
    update: function () {

    },
    clickListener: function () {

    }
};

module.exports = Play;