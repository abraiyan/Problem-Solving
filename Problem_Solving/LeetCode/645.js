/*
    Problem: Set Mismatch (https://leetcode.com/problems/set-mismatch/)
    
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var findErrorNums = function (nums) {
  let duplication, missingNumber

  for (const n of nums) {
    if (nums[Math.abs(n) - 1] < 0) duplication = Math.abs(n)
    else nums[Math.abs(n) - 1] *= -1
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missingNumber = i + 1
    }
  }

  return [duplication, missingNumber]
}
