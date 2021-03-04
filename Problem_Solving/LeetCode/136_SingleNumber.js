/*
    Problem: Single Number (https://leetcode.com/problems/single-number/)

    < Read from the link
    # Array, HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], true)
    } else {
      map.set(nums[i], false)
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      return nums[i]
    }
  }
}
