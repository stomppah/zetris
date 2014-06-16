/**
 * Author: Anthony <anthony@stomppah.co.uk>
 * Date: 16/06/14
 * Time: 08:57
 */

// Create the base display class.
var Display = function(context) {
    if (context && context.length > 0) {
        this.display = context;
        this.init();
    }
};
Display.prototype.init = function() {};

// Derive Box from Display.
var Box = function(context) {
    Display.call(this, context);
};
Box.prototype = new Display();
Box.prototype.constructor = Box;
Box.prototype.init = function() {
    Display.prototype.init.call(this);

    // Create the annoying moving box...
    this.display.mouseover(function() {
        $(this).css({
            marginLeft: Math.floor(Math.random() * 100),
            marginTop: Math.floor(Math.random() * 100)
        });
    });
};

// Derive RedBox from Box.
var RedBox = function(context) {
    Box.call(this, context);
};
RedBox.prototype = new Box();
RedBox.prototype.constructor = RedBox;
RedBox.prototype.init = function() {
    Box.prototype.init.call(this);

    // Just change the background color.
    this.display.css('backgroundColor', 'red');
};

// Declare the jQuery plugin from the class.
jQuery.fn.clickme = function() {
    return jQuery(this).each(function() {
        new RedBox(jQuery(this));
    });
};

// Now test it...
jQuery(function() {
    jQuery('.box').clickme();
});