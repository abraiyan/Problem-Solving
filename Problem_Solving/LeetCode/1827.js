/*
    Problem: Minimum Operations to Make the Array Increasing (https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var minOperations = function (nums) {
  let output = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) continue
    let gap = nums[i - 1] - nums[i] + 1
    output += gap
    nums[i] = nums[i] + gap
  }

  return output
}
