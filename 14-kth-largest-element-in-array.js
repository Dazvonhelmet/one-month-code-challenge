/*
  solved on leetcode.com on 18/09/2019
  
  Problem Description:
  Find the kth largest element in an unsorted array. Note that it
  is the kth largest element in the sorted order, not the kth 
  distinct element.
*/
var testArr = [11,3,2,1,3,6,8,8];
var testK = 2;
var findKthLargest = function(nums, k) {
     
        return nums.sort((a,b)=>a-b)[nums.length-k];
    };
console.log(findKthLargest(testArr, testK));