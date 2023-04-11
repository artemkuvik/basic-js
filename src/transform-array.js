const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 



 function transform(arr) {
if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if(arr.length === 0) return []
 let copy = arr.slice(0);
 for (let i = 0; i < arr.length; i++) {
     if (copy[i] === '--double-next') copy.splice(i, 1, arr[i + 1]);
     if (copy[i] === '--discard-prev' && copy[i - 1] !== undefined) copy.splice(i - 1, 2);
     else if (copy[i] === '--discard-prev') copy.splice(i, 1);
     if (copy[i] === '--discard-next') {
         delete copy[i]
         delete copy[i + 1]
     }
     if (copy[i] === '--double-prev') copy.splice(i, 1, copy[i - 1]);
 }
    let result = [];
    copy.forEach(item => {
        if (item !== '--double-next' && item !== '--discard-prev' 
        && item !== '--discard-next' && item !== '--double-prev' && item !== undefined) result.push(item)
    })
 return result
}

module.exports = {
  transform
};
