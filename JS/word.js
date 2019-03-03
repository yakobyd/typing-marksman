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
    fill(100);
    rect(this.pos.x, this.pos.y, textWidth(this.word), fontsize, 5);
    fill(255);
    text(this.word, this.pos.x, this.pos.y);
  }
}
