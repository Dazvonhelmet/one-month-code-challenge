/*
 Solved on leetcode.com on 08/09/2019
 Problem Description: 
 Write a function that takes a string as input and reverse only the vowels of a string.
 
 @param {string} s
 @return {string}
 */
var reverseVowels = function(s) {
    var vowels =[];
    var loc =[];
    var arr =  s.split("")
    for (i=0;i<s.length;i++)
        {
           if (s[i].toLowerCase()==="a"||s[i].toLowerCase()==="e"||s[i].toLowerCase()==="i"||s[i].toLowerCase()==="o"||s[i].toLowerCase()==="u")
           {
               vowels.push(s[i]);
               loc.push(i)
           }
        }
    vowels =vowels.reverse();
    for(i=0;i<vowels.length;i++)
        {
          arr.splice(loc[i],1,vowels[i]);
        }
    return arr.join("")
};