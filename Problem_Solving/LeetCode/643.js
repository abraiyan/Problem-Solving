/*
    Problem: Maximum Average Subarray I (https://leetcode.com/problems/maximum-average-subarray-i/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var findMaxAverage = function (nums, k) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1]
  }

  let average = nums[k - 1] / k
  let j = 0

  for (let i = k; i < nums.length; i++) {
    let temp = (nums[i] - nums[j]) / k
    if (temp > average) average = temp
    j++
  }

  return average
}
