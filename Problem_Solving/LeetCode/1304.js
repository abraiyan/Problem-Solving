/*
    Problem: Find N Unique Integers Sum up to Zero (https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/)

    # Array, Math
    -> Time Complexity: O(n), Space Complexity: O(n)

*/

var sumZero = function (n) {
  let output = []

  for (let i = 0; i < n; i++) {
    output[i] = i * 2 - n + 1
  }

  return output
}
