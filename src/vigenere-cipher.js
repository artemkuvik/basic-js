const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(boolean = true) {
      this.boolean = boolean
  }
  encrypt(message, key) { 
      if(arguments[0] === undefined || arguments[1] ===undefined) {
          throw new Error('Incorrect arguments!')
      }
      message = message.toUpperCase().split('');
       let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
       let values = [];
         for (let i = 0; i < message.length; i++) {
          if(!alfabet.includes(message[i])) {
              values.push(message[i])
          }
          else {
          let index = alfabet.indexOf(message[i])
           values.push(index)
          }
       }
       let lengthOnlyLetters = 0;
       values.forEach(item => {
           if(typeof item === 'number') lengthOnlyLetters++;
       })
      let lettersStream = key.repeat(lengthOnlyLetters).slice(0, lengthOnlyLetters).toUpperCase();
       
       let keyStream = [];
       for (let i = 0; i < lettersStream.length; i++) {
           let index = alfabet.indexOf(lettersStream[i])
           keyStream.push(index)
      }
       let resultValues = [];
       let n = 0;
       for(let key of values) {
           if(typeof key === 'number') {
               resultValues.push((key + keyStream[n]) % 26)
               n++
           }
           else resultValues.push(key)
       }
       let result = [];
       for (let key of resultValues) {
             if(typeof key === 'number') {
             result.push(alfabet[key])
             }
             else result.push(key)
       }
       if(this.boolean === false) {
           result.reverse()
      }
       return result.join('')
  }
  decrypt(encryptedMessage, key) {
       if(arguments[0] === undefined || arguments[1] ===undefined) {
          throw new Error('Incorrect arguments!')
      }
      encryptedMessage = encryptedMessage.toUpperCase().split('');
       let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
       let values = [];
         for (let i = 0; i < encryptedMessage.length; i++) {
          if(!alfabet.includes(encryptedMessage[i])) {
              values.push(encryptedMessage[i])
          }
          else {
          let index = alfabet.indexOf(encryptedMessage[i])
           values.push(index)
          }
       }
       let lengthOnlyLetters = 0;
       values.forEach(item => {
           if(typeof item === 'number') lengthOnlyLetters++;
       })
      let lettersStream = key.repeat(lengthOnlyLetters).slice(0, lengthOnlyLetters).toUpperCase();
       
       let keyStream = [];
       for (let i = 0; i < lettersStream.length; i++) {
           let index = alfabet.indexOf(lettersStream[i])
           keyStream.push(index)
      }
       let resultValues = [];
       let n = 0;
       for(let key of values) {
           if(typeof key === 'number') {
               let o = key - keyStream[n];
               if(o < 0) {
                   o = o + 26
               }
               resultValues.push(o % 26)
               n++
           }
           else resultValues.push(key)
       }
       let result = [];
       for (let key of resultValues) {
             if(typeof key === 'number') {
             result.push(alfabet[key])
             }
             else result.push(key)
       }
       if(this.boolean === false) {
           result.reverse()
      }
       return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
