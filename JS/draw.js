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

/*
 * This file contains the code for drawing various text
 * as well as some general drawing utilities.
 */

 /* Draw our buffer, in other words, draw user input */
 function drawBuffer() {
   fill(0, 191, 255);  // deep sky blue
   textAlign(CENTER, CENTER);
   textSize(1.5 * fontsize);
   text(bufferToStr(), width/2, height - 2 * fontsize);
 }

/* Draw the score count */
 function drawScore() {
   fill(0, 191, 255);
   textAlign(LEFT, TOP);
   textSize(fontsize);
   text('Score: ' + score.toString(), 30, 30);
 }

 /* Messages */

function drawGameOverMsg(){
  fill(255, 25, 0);
  textAlign(CENTER, CENTER);
  textSize(2 * fontsize);
  text('Game Over', width/2, height/2);
}

function drawVictoryMsg() {
  fill(0, 204, 0);
  textAlign(CENTER, CENTER);
  textSize(2 * fontsize);
  text('You Won!', width/2, height/2);
}

function drawPlayAgainMsg(){
  fill(153, 255, 102);  // light green
  textAlign(CENTER, CENTER);
  textSize(fontsize);
  text('Press <Enter> to play again.', width/2, height/2 + 2 * fontsize);
}

/* Effects */

function dimScene(){
  fill(0, 0, 0, 100);
  rect(-1, -1, width + 2, height + 2);
}
