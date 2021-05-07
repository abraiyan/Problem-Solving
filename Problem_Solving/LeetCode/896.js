/*
    Problem: Monotonic Array (https://leetcode.com/problems/monotonic-array/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var isMonotonic = function (A) {
  if (A.length <= 1) return true

  let isIncreasing = true
  let isDecreasing = true

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) isIncreasing = false
    if (A[i] < A[i + 1]) isDecreasing = false
  }

  return isIncreasing || isDecreasing
}
