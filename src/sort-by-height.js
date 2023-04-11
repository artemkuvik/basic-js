const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrCopy = arr.slice(0)
  let result = arrCopy.sort((a, b) => a - b)
  let lastIndex = arrCopy.lastIndexOf(-1);
  let cleanArr = arrCopy.slice(lastIndex + 1);
  let pos = 0;
  while(true) {
      let foundPos = arr.indexOf(-1, pos);
      if(foundPos === -1) break;
      cleanArr.splice(foundPos, 0, -1);
      pos = foundPos + 1;
  }
  return cleanArr;
}

module.exports = {
  sortByHeight
};
