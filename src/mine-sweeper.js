const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = [];
for (let i = 0; i < matrix.length; i++) {
    let item = [];
    for (let j = 0; j < matrix[i].length; j++) {
        let cell = 0;
        if(matrix[i][j - 1] && j !== 0) cell++;
        if(matrix[i][j + 1]) cell++;
        if (i !== 0){
            if(matrix[i - 1][j]) cell++;
            if(matrix[i - 1][j - 1])  cell++;
            if(matrix[i - 1][j + 1])  cell++;
        }
        if (matrix[i + 1] !== undefined) {
            if(matrix[i + 1][j]) cell++;
            if(matrix[i + 1][j - 1])  cell++;
            if(matrix[i + 1][j + 1])  cell++;
        }
       
        item.push(cell);
      }
      result.push(item)
}
return result
}

module.exports = {
  minesweeper
};
