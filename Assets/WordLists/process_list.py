# The Typing Marksman
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.


import sys
import os.path


def main(argv):
    """This script reads a word list and prints relevant information.

    The following information is printed:
        * Number of words in the list.
        * Average word length.

    This function may throw one of the following exceptions:
        * Exception("Make sure you acces files " \
                    "from the current directory.")
        * Exception("No such file.")
        * Exception("Input has to be a single file name.")

    === Usage ===
        $ python ./process_list.py [FILE]
    """

    # Make sure that there is a single input
    if len(argv) == 1:
        file_path = "./" + argv[0]

        # Handle improper input
        if ".." in file_path:
            raise Exception("Make sure you acces files " \
                            "from the current directory.")
        if not os.path.isfile(file_path):
            raise Exception("No such file.")

        # Read the file
        with open(file_path, 'r') as file:
            lines = file.readlines()

            # Filter the file with this function
            def filter_function(line):
                if not line or line[0] in [' ', '*', '/', '\n']:
                    return False
                return True

            # Parse the text file
            lines = [line.rstrip('\n') for line in lines \
                        if filter_function(line)]

            # Calculate average word length
            avg_word_len = sum([len(word) for word in lines]) / len(lines)

            # Print
            print("Words:", len(lines))
            print("Average word length:", format(avg_word_len, '.2f'))

    else:
        raise Exception("Input has to be a single file name.")


if __name__ == "__main__":
    try:
        main(sys.argv[1:])
    except Exception as e:
        print("ERROR:\n  " + str(e))
