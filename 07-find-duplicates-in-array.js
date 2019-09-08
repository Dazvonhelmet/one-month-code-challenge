/*
 Solved on leetcode.com on 07/09/2019
 Problem Description:
 Given a sorted array nums, remove the duplicates in-place 
 such that each element appear only once and return the new 
 length.

 Do not allocate extra space for another array, you must do 
 this by modifying the input array in-place with O(1) extra 
 memory.
 
 @param {number[]} nums
  @return {number}
 */
var test = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function(nums) {
    for(i=0;i<nums.length;)
    {
        if(nums[i]===nums[i+1])
        {
            nums.splice(nums[i],1)
        }
        else i+=1
    }
    return nums
};
console.log(removeDuplicates(test))