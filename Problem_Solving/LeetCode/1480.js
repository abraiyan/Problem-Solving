/*
    Problem: Running Sum of 1d Array (https://leetcode.com/problems/running-sum-of-1d-array/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i]
  }

  return nums
}
