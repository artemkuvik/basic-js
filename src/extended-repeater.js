const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options = {repeatTimes: 1, separator: '+',addition: '', additionRepeatTimes: 0, additionSeparator: '|' }) {
  str = String(str);
 if(typeof options.addition !== 'string' && options.addition !== undefined)options.addition = String(options.addition);
  if(options.repeatTimes === undefined) options.repeatTimes = 1;
          if(options.separator === undefined) options.separator = '+';
          if(options.additionSeparator === undefined && options.additionRepeatTimes > 1) options.additionSeparator = '|';
          else if(options.additionSeparator === undefined ) options.additionSeparator = '';
          if(options.separator === undefined) options.separator = '+';
          if(options.additionRepeatTimes === undefined ) options.additionRepeatTimes = 1;
          if(options.addition === undefined) options.addition = '';
          if(options.repeatTimes === undefined) options.repeatTimes = 0;
          let add = '';
          for (let j = 0; j < options.additionRepeatTimes; j++) {
         add = add + options.addition + options.additionSeparator;
     }
     let indexLastAddition = add.lastIndexOf(options.additionSeparator);
     add =  add.slice(0, indexLastAddition)
     
     if(add.length === 0 && options.repeatTimes === 1) return str + options.addition
     let result = '';
     for(let i = 0; i < options.repeatTimes; i++) {
      result = result + str + add + options.separator;
     }
let indexLastSeparator = result.lastIndexOf(options.separator);
     return result.slice(0, indexLastSeparator)
}


module.exports = {
  repeater
};
