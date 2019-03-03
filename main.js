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

let font;
let fontsize = 40;

let words;

function preload() {
  // Preload our font
  font = loadFont('Assets/Fonts/Comfortaa-Regular.ttf');
}

function setup() {
  // Create a black canvas
  let canvas = createCanvas(800, 600);
  canvas.parent('canvas');
  background(0);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(LEFT, TOP);

  // Define words
  words = generateWords(10);
}

function draw() {
  background(0);  // reset background to black

  // Draw the words
  for(let i = 0; i < words.length; i++){
    words[i].update();
    words[i].show();
  }
}
