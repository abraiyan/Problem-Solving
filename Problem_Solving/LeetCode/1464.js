/*
    Problem: Maximum Product of Two Elements in an Array (https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var maxProduct = function (nums) {
  let maxOne = nums[0]
  let maxTwo = null

  for (let i = 1; i < nums.length; i++) {
    if (maxOne < nums[i]) {
      maxTwo = maxOne
      maxOne = nums[i]
    } else if (maxTwo < nums[i]) {
      maxTwo = nums[i]
    }
  }

  return (maxOne - 1) * (maxTwo - 1)
}
