const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create result array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} result array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

 
  const result = [];

  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (element === '--discard-next') {
   
      if (i < arr.length - 1) {
        i++;
      }
    } else if (element === '--discard-prev') {
      
      if (result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else if (element === '--double-next') {
      
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
    } else if (element === '--double-prev') {
      
      if (result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.push(result[result.length - 1]);
      }
    } else {
      
      result.push(element);
    }
  }

  return result;
}

module.exports = {
  transform
};


