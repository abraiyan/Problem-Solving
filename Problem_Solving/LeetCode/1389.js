/*
    Problem: Create Target Array in the Given Order (https://leetcode.com/problems/create-target-array-in-the-given-order/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var createTargetArray = function (nums, index) {
  const target = []

  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]] !== undefined) {
      target.splice(index[i], 0, nums[i])
    } else {
      target[index[i]] = nums[i]
    }
  }

  return target
}
