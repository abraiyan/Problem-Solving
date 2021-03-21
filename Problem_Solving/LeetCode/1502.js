/*
    Problem: Can Make Arithmetic Progression From Sequence (https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b)

  for (let i = 1; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== Math.abs(arr[1] - arr[0])) {
      return false
    }
  }

  return true
}
