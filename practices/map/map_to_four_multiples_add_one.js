'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map((item)=>item*4+1);
};
Array.prototype.getFourMultiplesAddOne = function (prop) {
  let result = [];
  for (let i =0; i<this.length; i++) {
          result.push(porp(this[i]));
      }
      return result;
  }

module.exports = map_to_four_multiples_add_one;
