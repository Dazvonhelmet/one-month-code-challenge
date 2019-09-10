/*
  solved on leetcode.com on 09/09/2019.

  Problem Description: 
  Given an array containing n distinct numbers
  taken from 0, 1, 2, ..., n, find the one that 
  is missing from the array.

  @param {number[]} nums
  @return {number}
 */
var nums = [0,1,3];
var missingNumber = function(nums) {
    nums.sort();
    if(nums[nums.length-1]!=nums.length)
        {return nums.length;}
    else if(nums[0]!=0)
        {return 0}
    for (i=1;i<nums.length;i++)
        {
            var exp = nums[i-1]+1;
            if(nums[i]!= exp)
                {
                    return exp;
                }
        }
};
console.log(missingNumber(nums));