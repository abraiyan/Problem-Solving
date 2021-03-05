/*
    Problem: Find Pivot Index (https://leetcode.com/problems/find-pivot-index/)

    # Use: Array, Prefix Sum
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var pivotIndex = function (nums) {
  let totalSum = 0
  let leftSum = 0

  for (const x of nums) totalSum += x
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i
    } else {
      leftSum += nums[i]
    }
  }
  return -1
}
