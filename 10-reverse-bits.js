/*
  solved on leetcode.com on 10/09/2019
  
  Problem Description:
  Reverse bits of a given 32 bits unsigned integer.

  @param {number} n - a positive integer
  @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32,0),2);
};