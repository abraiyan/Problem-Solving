/*
    Problem: Largest Number At Least Twice of Others (https://leetcode.com/problems/largest-number-at-least-twice-of-others/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var dominantIndex = function (nums) {
  let largest = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[largest]) largest = i
  }

  for (const n of nums) {
    if (n * 2 > nums[largest] && n !== nums[largest]) return -1
  }
  return largest
}
