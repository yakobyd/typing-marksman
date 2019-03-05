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

class Point{
  constructor(x, y, v){
    this.pos = createVector(x, y);
    this.vel = createVector(0, v);
  }

  update(){
    this.pos.add(this.vel);
  }
}

class Word extends Point{
  constructor(x, y, v, word){
    super(x, y, v);
    this.word = word;
  }

  show(){
    // Handle text size here to get correct text width
    textSize(fontsize);

    // Draw the surrounding rectangle
    fill(100);
    rect(this.pos.x, this.pos.y, textWidth(this.word), fontsize, 5);

    // Draw the text
    fill(255);
    textAlign(LEFT, TOP);
    text(this.word, this.pos.x, this.pos.y);
  }

  hasLeftScreen(){
    let inX = (this.pos.x > 0) && (this.pos.x + textWidth(this.word) < width);
    let inY = (this.pos.y < height - fontsize);
    return !(inX && inY);
  }
}
