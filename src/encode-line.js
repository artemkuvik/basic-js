const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine (str) {
  if (str === '') return str;
  let resultStr = '';
  let set = new Set(str);
  let setStr = '';
  for (let value of set) {
  setStr = setStr + value
}
let result = 0;
if (setStr === str) return str;
  for (let i = 0; i < str.length; i++) {
      if(str[i] === str[i + 1]) {
          result++;
      } 
    else {
resultStr = resultStr + (result + 1) + str[i] ;
        result = 0;
  }
  }
  let lastResult = '';
  for (let j = 0; j < resultStr.length; j++) {
      if (resultStr[j] !== '1') {
          lastResult += resultStr[j] 
      }
  }
  return lastResult;

}

module.exports = {
  encodeLine
};
