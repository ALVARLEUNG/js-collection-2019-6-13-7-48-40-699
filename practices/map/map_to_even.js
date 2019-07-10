'use strict';
function map_to_even(collection){
  return collection.map((item)=>item*2);
}

Array.prototype.getCollection = function (prop) {
  let result = [];
  for (let i =0; i<this.length; i++) {
          result.push(porp(this[i]));
      }
      return result;
  }

module.exports = map_to_even;
