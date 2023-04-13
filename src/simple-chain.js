const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  chain:[],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here;
    if(value === undefined){
      this.chain.push('( )')
    }else{
      this.chain.push(`( ${value} )`)
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
    
  },
  reverseChain() {
    
    this.chain.reverse();
    return this;
  },
  finishChain() {
    
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
