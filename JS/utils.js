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

/* Generate n words */
function generateWords(n) {
  let words = [];
  let x, y, v;
  let word, w;

  filterWordList();

  for (let i = 0; i < n; i++) {
    x = random(0.05 * width, 0.8 * width);
    y = random(0.05 * height, 0.2 * height);
    v = random(0.1, 1);

    word = random(word_list);  // choose a random word form the list

    w = new Word(x, y, v, word);
    words.push(w);
  }

  return words;
}

/* Filter the global word_list.
 * That is, remove comments and empty lines.
 */
function filterWordList() {
  // Filter with this function
  function filter_function(line) {
    if (!line || [' ', '*', '/'].includes(line[0]))
      return false;

    return true;
  }

  word_list = word_list.filter(filter_function);

  return word_list;
}

/* Get the string that our global buffer represents */
function bufferToStr() {
  let ret = '';

  for(let i = 0; i < buffer.length; i++)
    ret += buffer[i];

  return ret;
}

/* Get the words (strings) from our global array of Word objects */
function getWordArr() {
  let ret = [];

  for (let i = 0; i < words.length; i++)
    ret.push(words[i].word);

  return ret;
}

/* Find all the words that match the buffer and return the index of the
 * word with the highest y, that is, closest to the bottom of the screen.
 * This function uses the global variables words and buffer.
 */
function getIndexTooShoot() {
  if (words.length === 0)
    return -1;

  let ret = 'null';  // flag the value to be returned

  // Find the word closest to the bottom of the screen
  for (let i = 0; i < words.length; i++) {
    if (words[i].word === bufferToStr()) {
      if (ret === 'null')  // unflag if we found a word to shoot at
        ret = i;

      else if (words[i].pos.y > words[ret].pos.y)
        ret = i;
    }
  }

  // If no word matches the buffer then return an error code, -1
  if (ret === 'null')
    return -1;

  return ret;
}
