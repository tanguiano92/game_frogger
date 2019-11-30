// inspired by Daniel Shiffman: The Coding Train Code Challenge
'use strict'

let state = 'title';

var frog;

var grid_size = 25;

var rows = [];

let frogImg;

let rainbowImg;

function preload(){
  frogImg = loadImage('images/compter.png');
  rainbowImg = loadImage('images/abstract.jpg');
}

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
    new Row(0, 1, 0, width, 0, 100, false),
    new Row(grid_size, 1, 0, width, 0, 0, true),
    new Row(2 * grid_size, 4, 5, 4 * grid_size, 600, 10, true),
    new Row(3 * grid_size, 3, 8, 2 * grid_size, 400, 30, true),
    new Row(4 * grid_size, 2, 6, 3 * grid_size, 350, 25, true),
    new Row(5 * grid_size, 1, 0, width, 0, 0, true),
    new Row(6 * grid_size, 3, 8, 1 * grid_size, 250, 100, false),
    new Row(7 * grid_size, 4, 3, 1 * grid_size, 300, 150, false),
    new Row(8 * grid_size, 3, 2, 2 * grid_size, 400, 0, false),
    new Row(9 * grid_size, 2, 0, width, 0, 0, true),
    new Row(10, 1, 0, width, 0, 100, true),
    new Row(grid_size, 1, 0, width, 0, 0, true),
    new Row(11 * grid_size, 2, 3, 4 * grid_size, 250, 0, true),
    new Row(12 * grid_size, 5, 0.5, 4 * grid_size, 600, 10, true),
    new Row(13 * grid_size, 3, 3, 2 * grid_size, 400, 30, true),
    new Row(14 * grid_size, 4, 6, 3 * grid_size, 350, 25, true),
    new Row(15 * grid_size, 1, 0, width, 0, 0, true),
    new Row(16 * grid_size, 3, 3, 1 * grid_size, 250, 100, false),
    new Row(17 * grid_size, 5, 6, 1 * grid_size, 300, 150, false),
    new Row(18 * grid_size, 4, 5, 2 * grid_size, 400, 0, false),
    new Row(19 * grid_size, 1, 0, width, 0, 0, true),
  ];

  // if createCanvas
  // rows will be length of canvas
  createCanvas(width, rows.length * grid_size);
  resetGame();
}

function draw() {
  background(200, 12, 130);
  

  if (state === 'title'){
    title();
} else if (state === 'level 1'){
  level1();
}

function title(){;
  textSize(80);
  stroke(255);
  text('Digital Art is Art', 105, 105);
}

function level1(){
}
  var intersects = null;

  // if "Frog" runs into obstacles
  // execute intersect/reset of game
  for (var i = 0; i < rows.length; i++) {
    rows[i].show();
    rows[i].update();
    if (frog.intersects(rows[i])) {
      intersects = rows[i].hits(frog);
      if ((intersects !== null) ^ rows[i].inverted) {
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
  if (keyCode === UP_ARROW) {
    frog.move(0, -grid_size);
  } else if (keyCode === DOWN_ARROW) {
    frog.move(0, grid_size);
  } else if (keyCode === LEFT_ARROW) {
    frog.move(-grid_size, 0);
  } else if (keyCode === RIGHT_ARROW) {
    frog.move(grid_size, 0);
  }
}
