'use strict';

var Block = function (game, x, y, type, frame) {
    Phaser.Sprite.call(this, game, x, y, type, frame);

    // set the sprite's anchor to the center
    this.anchor.setTo(0.5, 0.5);

};

Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

Block.prototype.update = function () {

    // write your prefab's specific update code here

};

module.exports = Block;
