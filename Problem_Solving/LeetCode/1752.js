/*
    Problem: Check if Array Is Sorted and Rotated (https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var check = function (nums) {
  let x = 0
  let counter = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      x = i
      counter++
    }
  }

  if (counter > 1) return false
  if (x === 0) return true

  if (nums[nums.length - 1] <= nums[0] || nums[0] >= nums[nums.length - 1]) {
    return true
  }
  return false
}
