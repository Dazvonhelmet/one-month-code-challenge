/*
 Solved on leetcode.com on 05/09/2019
 Problem Description: 
 There is a robot starting at position (0, 0), the origin, 
 on a 2D plane. Given a sequence of its moves, judge if 
 this robot ends up at (0, 0) after it completes its moves.

 The move sequence is represented by a string, and the 
 character moves[i] represents its ith move. Valid moves 
 are R (right), L (left), U (up), and D (down). If the robot 
 returns to the origin after it finishes all of its moves, 
 return true. Otherwise, return false.

 If the last word does not exist, return 0.
 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x = 0;
    var y = 0;
    var movesArr = moves.split("");
    for (i=0;i<movesArr.length;i++)
        {
            switch (movesArr[i].toLowerCase()) {
                case "u": y++
                    break;
                case "d": y--
                    break;
                case "l": x--
                    break;
                case "r": x++
                    break;
                    }
        }
    if(x===0&&y===0){return true}
    else{return false}
};
console.log(judgeCircle("dlutr"))
