// inspired by Daniel Shiffman: The Coding Train Code Challenge
'use strict'

// if Rectangle function is called
// show Frog character
// give frog dimensions and parameters
function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}


// if frog touches obstacle
// execute intersection with any other Rectangle object.
// frog dies and resets
Rectangle.prototype.intersects = function(other) {
  return !(
    this.x + this.w <= other.x ||
    this.x >= other.x + other.w ||
    this.y + this.h <= other.y ||
    this.y >= other.y + other.h
  );
}

// if frog Moves
// Move this rectangle by x and y spacing.
Rectangle.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
}

// Shows all rectangle objects
Rectangle.prototype.show = function() {
  rect(this.x, this.y, this.w, this.h);
}
