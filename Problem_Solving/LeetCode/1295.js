/*
    Problem: Find Numbers with Even Number of Digits (https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

    # Array, Math
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var findNumbers = function (nums) {
  let output = 0

  for (const n of nums) {
    if (parseInt(Math.floor(Math.log10(n)) + 1) % 2 === 0) output++
  }

  return output
}
