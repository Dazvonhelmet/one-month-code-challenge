
/*
Solved on leetcode.com on 03/09/2019
Problem Description: 
Count the number of prime numbers less than a non-negative number, n.

 * @param {number} n
 * @return {number}
 *  */

const test = 52;

var countPrimes = function(n) {
    var primes =[];
    var count=0;
    for(i=2;i<n;i++){primes[i]=true}
    
    var limit = Math.sqrt(n);
    for (i=2;i<limit;i++)
        {
            for(j=i*i;j<n;j+=i)
                {primes[j]=false;}
        }
    primes.forEach(el=>{if(el==true){count++}})
    return count;
};

console.log(countPrimes(test));