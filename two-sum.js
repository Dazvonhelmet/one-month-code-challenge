/*
Solved on leetcode.com on 02/09/2019
Problem Description: 
Given an array of integers, return indices of the two
numbers such that they add up to a specific target.

  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */
var arr = [2,7,5,6]
var test = 9;

var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++)
        {
            for(j=i+1;j<nums.length;j++)
            {
                var arr;
            if(nums[i]+nums[j]==target)
                    {
                        arr =[i,j];
                        return arr}
            }
        }
};
console.log(twoSum(arr,test))