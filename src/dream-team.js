const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (Array.isArray(members) !== true) {
    return false;
  }
  const name = members
    .filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase());
    return name.sort().join('');
  
}


module.exports = {
  createDreamTeam
};


/* let result = "";
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string' || members[i] === ' ');
    result = result + members[i].slice(0, 1);
  }
  result = (result.split('').sort().join('')).toUpperCase();
  return result  */