'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  // return collection.chooseMultiples();
  const chooseMultiplesThree = (a) => {
    return a % 3 === 0;
  }
  return collection.filter(chooseMultiplesThree);
}

// Array.prototype.chooseMultiples = function () {
//   let result = [];
//   for(let i=0; i<this.length; i++) {
//     if (this[i] % 3 === 0) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// }

module.exports = choose_multiples_of_three;
