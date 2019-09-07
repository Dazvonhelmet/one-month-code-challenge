/*
 Solved on leetcode.com on 06/09/2019
 Problem Description: 
 
 Given an array with n integers, your task is to check 
 if it could become non-decreasing by modifying at most 
 1 element.

 We define an array is non-decreasing if: 
 array[i] <= array[i + 1] holds for every 
 i (1 <= i < n).

  @param {number[]} nums
  @return {boolean}
 */
var test = [2,3,3,2,4];
var checkPossibility = function(nums) {
    for (i=1;i<nums.length-1;i++)
        {
            if(nums[i]>nums[i+1])
                {
                    if(nums[i-1]<nums[i+1]){nums[i]=nums[i-1]}
                    else{
                 nums[i+1]=nums[i];}
                 for (j=0;j<nums.length-1;j++)
                 {
                     if(nums[j]>nums[j+1])
                     {
                         return false;
                     }
                 }
                }
        }
        return true
};
console.log(checkPossibility(test))