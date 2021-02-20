/*
    Problem: Product of Array Except Self (https://leetcode.com/problems/product-of-array-except-self/)

    < Input:  [1,2,3,4]
    < Output: [24,12,8,6]

    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var productExceptSelf = function (nums) {
  let total = 1

  for (const i of nums) {
    total *= i
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = total / nums[i]
  }

  return nums
}
