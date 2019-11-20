// inspired by Daniel Shiffman: The Coding Train Code Challenge
'use strict'

// if character is "Frog"
// execute Frong function to create character
// call rectangle as "Frog" character

function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);

// if "Frog" is given a speed
// call null
  this.sitting_on = null;
}

// if Frog character is created
// create rectangle object, extend Rectangle.
Frog.prototype = Object.create(Rectangle.prototype);

// Attach this frog to the other object
// execute Frog function and set speed
Frog.prototype.attach = function(other) {
  this.sitting_on = other;
}

// if frog is attached to an object
// execute move frog with object.
// update frog
Frog.prototype.update = function() {
  if(this.sitting_on !== null) {
    this.x += this.sitting_on.speed;
  }
  this.x = constrain(this.x, 0, width - this.w);
}

// if frog function is called
// show the frog
Frog.prototype.show = function() {
  fill(0, 255, 0, 200);
  rect(this.x, this.y, this.w, this.h);
}
