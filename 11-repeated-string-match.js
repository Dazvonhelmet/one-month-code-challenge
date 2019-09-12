/*
  solved on leetcode.com on 11/09/2019
  
  Problem Description:
  Given two strings A and B, find the minimum number of 
  times A has to be repeated such that B is a substring 
  of it. If no such solution, return -1.

  @param {string} A
  @param {string} B
  @return {number}
 */
test = "a"
test2 = "aa"
var repeatedStringMatch = function(A, B) {
    var count =1;
    var temp = A;
    while (A.length<B.length)
        {
            A+=temp;
            count++;
        }
    if(A.includes(B))
    {return count}
    else 
    {A+=temp;
        count++
    if(A.includes(B))
    {
        return count;
    }
    else{return -1}
    }
};
console.log(repeatedStringMatch(test,test2))