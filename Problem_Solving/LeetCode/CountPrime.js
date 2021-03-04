/*
    Problem: Count Prime (https://leetcode.com/problems/count-primes/)

    < Input: n = 10
    < Output: 4
    < Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

    # Array, Sieve of Eratosthenes
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var countPrimes = function (n) {
  const array = new Array(n).fill(false)
  let count = 0

  for (let i = 2; i < n; i++) {
    if (!array[i]) {
      count++
      for (let j = 2; i * j < n; j++) {
        array[i * j] = true
      }
    }
  }

  return count
}
