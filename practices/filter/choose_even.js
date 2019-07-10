'use strict';

function choose_even(collection) {

  //implement here
  // return collection.chooseMultiples();
  const chooseMultiples = (a) => {
    return a % 2 === 0;
  }
  return collection.filter(chooseMultiples);

}

// Array.prototype.chooseMultiples = function () {
//   let result = [];
//   for(let i=0; i<this.length; i++) {
//     if (this[i] % 2 === 0) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// }
module.exports = choose_even;
