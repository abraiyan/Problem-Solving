/*
    Problem: Missing Number (https://leetcode.com/problems/missing-number/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var missingNumber = function (nums) {
  const gaussSum = (nums.length * (nums.length + 1)) / 2
  let totalSum = 0

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i]
  }

  return gaussSum - totalSum
}
