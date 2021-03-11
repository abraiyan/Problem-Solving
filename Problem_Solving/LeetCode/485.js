/*
    Problem: Max Consecutive Ones (https://leetcode.com/problems/max-consecutive-ones/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0
  let currentCount = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount
      }
      currentCount = 0
    }
  }

  if (currentCount > maxCount) return currentCount
  return maxCount
}
