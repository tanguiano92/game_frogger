// inspired by Daniel Shiffman: The Coding Train Code Challenge
'use strict'

var frog;

var grid_size = 50;

var rows = [];

// if "Frog" runs into obstacle, or game is at load.
// "Frog" will update and reset to beginning of game
function resetGame() {
  frog = new Frog(width / 2, height - grid_size, grid_size);
}

function setup() {
  // if game is started
  // game will begin
  // execute rows and obstacles in motion across grid
  width = windowWidth;
  height = windowHeight;
  rows = [
    new Row(0, 1, 0, width, 0, 100, true),
    new Row(grid_size, 1, 0, width, 0, 0, true),
    new Row(2 * grid_size, 2,  0.5, 4 * grid_size, 600,  10, true),
    new Row(3 * grid_size, 3, -1.3, 2 * grid_size, 400,  30, true),
    new Row(4 * grid_size, 2,  2.3, 3 * grid_size, 350,  25, true),
    new Row(5 * grid_size, 1, 0, width, 0, 0, true),
    new Row(6 * grid_size, 3,  1.2, 1 * grid_size, 250, 100, false),
    new Row(7 * grid_size, 2, -3.5, 1 * grid_size, 300, 150, false),
    new Row(8 * grid_size, 2, 2, 2 * grid_size, 400, 0, false),
    new Row(9 * grid_size, 2, 0, width, 0, 0, true),
  ];

  // if createCanvas
  // rows will be length of canvas
  createCanvas(width, rows.length * grid_size);
  resetGame();
}

function draw() {
  background(200, 0, 130);
  fill(0);

  var intersects = null;

// if "Frog" runs into obstacles
// execute intersect/reset of game
  for(var i = 0; i < rows.length; i++) {
    rows[i].show();
    rows[i].update();
    if(frog.intersects(rows[i])) {
      intersects = rows[i].hits(frog);
      if((intersects !== null) ^ rows[i].inverted) {
        resetGame();
      }
    }
  }

  // if "intersects" is in frog.attach
  // "Frog" will insect rows
  frog.attach(intersects);
  frog.update();
  frog.show();
}

// if p5.js key pressed function is used
// can be run when any key is pressed
// execute controls on keyboard
function keyPressed() {
  if(keyCode === UP_ARROW) {
    frog.move(0, -grid_size);
  } else if(keyCode === DOWN_ARROW) {
    frog.move(0, grid_size);
  } else if(keyCode === LEFT_ARROW) {
    frog.move(-grid_size, 0);
  } else if(keyCode === RIGHT_ARROW) {
    frog.move(grid_size, 0);
  }
}
