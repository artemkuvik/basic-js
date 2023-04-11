const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(name) {
  let set = Array.from(new Set(name))
for (let i = 0; i < set.length; i++) {
let pos = 0;
let counter = 0;
while (true) {
let foundPos = name.indexOf(set[i], pos);
if (foundPos == -1) break;
else {
  name[foundPos] =  name[foundPos] + `(${counter})`;
      counter++
          }
    if (name[foundPos].includes('(0)')) name[foundPos] = name[foundPos].slice(0, -3);
      pos = foundPos + 1; 
}  
}
  return name;
}

module.exports = {
  renameFiles
};
