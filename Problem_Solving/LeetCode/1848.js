/*
    Problem: Minimum Distance to the Target Element (https://leetcode.com/problems/minimum-distance-to-the-target-element/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var getMinDistance = function (nums, target, start) {
  let output = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (output === null || output > Math.abs(start - i)) {
        output = Math.abs(start - i)
      }
    }
  }
  return output
}
