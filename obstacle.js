// inspired by Daniel Shiffman, The Coding Train
'use strict'

// if rectangle encounters an aobstacle
// execute obstacle function
function Obstacle(x, y, w, h, s) {
  Rectangle.call(this, x, y, w, h);
  // if obstacle moves along the grid
  // execute this speed
  this.speed = s;
}

// if Rectangle obstacle is created
// execute Rectangle extension
Obstacle.prototype = Object.create(Rectangle.prototype);

// Move this obstacle by its speed
// wrap it if off the screen.
// execute obstacle function
Obstacle.prototype.update = function() {
  this.move(this.speed, 0);
  if (this.x > width + grid_size) {
    this.x = -this.w - grid_size;
  }
  if (this.x < -this.w - grid_size) {
    this.x = width + grid_size;
  }
}

// Display this obstacle.
Obstacle.prototype.show = function() {
  fill(20, 190, 300);
  rect(this.x, this.y, this.w, this.h);
}
