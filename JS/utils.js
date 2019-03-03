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

function generateWords(n){
  words = [];

  for(let i = 0; i < n; i++){
    x = random(0.2 * width, 0.8 * width);
    y = random(0.1 * height, 0.2 * height);
    v = random(0.1, 1);
    word = random(['random', 'text', 'word']);

    w = new Word(x, y, v, word);
    words.push(w);
  }

  return words;
}
