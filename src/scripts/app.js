
import _clone from 'lodash.clone'
import _shuffle from 'lodash.shuffle'

/**
 * @Class: Solve Star Puzzle
 * @Description: This class is supposed to solve a puzzle where there are 4 numbers in one row in a star shaped form and every row has to be 26 in total.
 *
 */
class SolveStarPuzzle {
    constructor() {
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
    }

    /**
     * Logic
     * Every number is only available one time as there are 12 fields.
     * However, every number applies to two rows.
     */

    /**
     * This function creates a row that euqals 26
     * @param availableNumbers
     * @returns {Array}
     */
    createRow(availableNumbers) {

        let count = 0;
        let four = [];

        function calculateNumbers() {
            let numbers = _shuffle(availableNumbers);
            four = [];

            for (let i = 4; i > 0; i--) {
                four.push(numbers.pop());
            }

            count = four.reduce( (previous, current) => {
                return previous + current;
            }, 0);

            return count;
        }

        do {
            var calcNums = calculateNumbers();
        } while (calcNums !== 26)

        return four;
    }

    /**
     * This function is filling up all the places in the grid and checking if all of them equal 26.
     * So far this method doesnt seem to be a good one as through the random approach it could run for hours.. or days until it finds a match.
     * @returns {boolean}
     */
    bruteForce() {
        let randomPositions = _shuffle(this.numbers);
        let lines = [
            [0, 3, 6, 10],
            [4, 6, 9, 11],
            [7, 8, 9, 10],
            [0, 3, 5, 7],
            [1, 2, 3, 4],
            [1, 5, 8, 11]
        ];

        let newLines = lines.map( (val, key) => {
            let count = 0;

            count = val.reduce( (prev, curr) => {
                return prev + randomPositions[curr];
            }, 0);

            return count === 26;
        });

        let isMatch = newLines.every( (val, key) => {
            return val;
        });

        if (isMatch) {
            console.log(randomPositions);
        }
        return false;
    }


    solve() {

        // no luck with that version so far.. too many possibilities to find a match.. could take hours.. days
        //var count = 0;
        //do {
        //    count++;
        //
        //    if (count % 10000000 === 0) {
        //        console.log(count)
        //    }
        //    var solvePuzzle = this.bruteForce();
        //} while (solvePuzzle === false)

        var row = this.createRow(this.numbers);
        console.log(row);
    }
}

//export default SolveStarPuzzle
new SolveStarPuzzle().solve();