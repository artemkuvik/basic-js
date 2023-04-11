const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
   chain: [],
    getLength() {
        let length = 0;
        for (let key in this) {
            length++;
        }
        return length;
    },
    addLink(value) {
        if(value === undefined) value = ' '
        this.chain.push(`( ${value} )`)
    return this
    },
    finishChain() {
        let clone = this.chain.slice()
        this.chain = [];
         return clone.join('~~')
  },
    removeLink(position) {
        if(!Number.isInteger(position) || position  < 1 || 
        position > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
       this.chain.splice(position - 1, 1);
       return this;
    },
    reverseChain() {
        this.chain.reverse()
         return this
    }
  }

module.exports = {
  chainMaker
};
