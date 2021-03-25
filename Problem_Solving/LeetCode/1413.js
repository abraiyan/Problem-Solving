/*
    Problem: Minimum Value to Get Positive Step by Step Sum (https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var minStartValue = function (nums) {
  let minValue = Math.min(0, nums[0])

  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i]
    minValue = Math.min(minValue, nums[i])
  }
  return 1 - minValue
}
