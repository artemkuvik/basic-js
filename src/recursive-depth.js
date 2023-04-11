const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
 calculateDepth(arr) {
  let counter = 1;
  let copy = arr.slice();
  let search = copy.map(item => Array.isArray(item))
  if(search.includes(true))
  {  
  copy = copy.flat(1);
  this.count++;
  counter += this.calculateDepth(copy)
  }
      return counter;
    }     
}




module.exports = {
  DepthCalculator
};
