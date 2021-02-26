/*
    Problem: Maximum Subarray (https://leetcode.com/problems/product-of-array-except-self/)

    < Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    < Output: 6
    < Explanation: [4,-1,2,1] has the largest sum = 6.

    # Use: Dynamic Programming
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

const nums = [-2, 1 - 3, 4, -1, 2, 1, -5, 4]

var maxSubArray = function (nums) {
  let max_so_far = nums[0]
  let max_ending_here = nums[0]

  for (let i = 1; i < nums.length; i++) {
    max_ending_here = nums[i] + Math.max(0, max_ending_here)
    max_so_far = Math.max(max_ending_here, max_so_far)
  }

  return max_so_far
}

maxSubArray(nums)
