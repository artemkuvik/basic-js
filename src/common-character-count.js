const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('').sort()
  s2 = s2.split('').sort()
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
      let pos = 0;
     let foundPos = s2.indexOf(s1[i]);
     if(foundPos !== -1) {
      s2.splice(foundPos, 1)
         result++;
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
