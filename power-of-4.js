/*
Solved on leetcode.com on 01/09/2019
Problem Description: 
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

  @param {number} num
  @return {boolean}
*/
const test = 54;
var isPowerOfFour = function(num) {
    return Math.log2(num)%2===0
};
console.log(isPowerOfFour(test))