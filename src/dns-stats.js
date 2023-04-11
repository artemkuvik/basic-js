const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = domains.map(item => item.split('.').reverse()).sort((a, b) => b.length - a.length);
  let obj ={};
  for (let i = 0;i < arr.length; i++) {
  while (arr[0].length > 1) {
  let result = arr.map(item => item.filter(item2 => item2 === arr[i][0]));
      obj['.' + arr[0][0]] = result.length;
      arr.map(item => {
         if(item[1] !== undefined) {
         item[0] = item[0].concat('.', item[1])
         item.splice(1, 1)
         }
     })
      }
  }
  arr = arr.map(item => '.' + item);
  for (let i = 0; i < arr.length; i++) {
      if(!Object.keys(obj).includes(arr[i])) {
          obj[arr[i]] = 1;
      }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
