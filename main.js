/* The Typing Marksman
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

let words;   // The array of words to shoot
let buffer;  // Stores user keyboard input
let score;   // The score count

let gameOver = false;
let numOfWords = 15;

// Font variables
let font;
let fontsize;

// Track current word list
let word_list;

/* Reset the game */
function init() {
  gameOver = false;
  score = 0;

  // Set text characteristics
  textFont(font);
  fontsize = 40;

  // Handle text size here to get correct values of text width
  textSize(fontsize);

  words = generateWords(numOfWords);  // define words
  buffer = [];  // empty the input buffer
}

function preload() {
  // Preload our font
  font = loadFont('Assets/Fonts/Comfortaa-Regular.ttf');

  // Preload our word list
  word_list = loadStrings("../Assets/WordLists/mathematics.txt");
}

/* Initialize our game settings */
function setup() {
  // Create a black canvas
  let canvas = createCanvas(1280, 720);
  canvas.parent('canvas');
  background(0);

  // Initialize a game
  init();
}

/* The game loop */
function draw() {
  background(0);  // reset background to black

  // Draw the words
  for (let i = 0; i < words.length; i++) {
    words[i].update();
    words[i].show();

    // Remove words that have left the screen
    if (words[i].hasLeftScreen()) {
      words.splice(i, 1);
      i--;
      gameOver = true;  // temporal
    }
  }

  // Draw our buffer
  drawBuffer();

  // Draw score count
  drawScore();

  // Shoot the words
  let i = getIndexTooShoot();
  if (i >= 0) {
    score += 10 * words[i].word.length;
    words.splice(i, 1);
    buffer = [];
  }

  // Check if the player has lost
  if (gameOver) {
    dimScene();
    drawScore();
    drawGameOverMsg();
    drawPlayAgainMsg();
    noLoop();
  }

  // Check if the player has won
  if (words.length === 0  && !gameOver) {
    gameOver = true;
    background(0);
    drawScore();
    drawVictoryMsg();
    drawPlayAgainMsg();
    noLoop();
  }
}

/* Handle User Input */
function keyPressed() {
  // Add typed letters to the buffer
  if ((65 <= keyCode && keyCode <= 90) || keyCode === 32)
    buffer.push(key);

  // Delete the last key when backspace is pressed
  else if (keyCode === BACKSPACE)
    buffer.pop();

  // Reset buffer when CTRL is pressed
  else if (keyCode === CONTROL)
    buffer = [];

  // Restart the game
  else if (keyCode === ENTER && gameOver){
    init();
    loop();
  }

  console.log(bufferToStr());  // DEBUG
}
