/*
 Solved on leetcode.com on 04/09/2019
 Problem Description: 
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 return the length of last word in the string.

 If the last word does not exist, return 0.

 @param {string} s
 @return {number}
*/
var test = "   "
var lengthOfLastWord = function(s) {
    if(s.trim()===""){return 0}
    let lastword = s.split(" ").filter(el=>el!="")
    return lastword[lastword.length-1].length;
};
console.log(lengthOfLastWord(test))