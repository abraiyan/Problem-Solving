/*
    Problem: Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)

    # Set
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var containsDuplicate = function (nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    } else {
      set.add(nums[i])
    }
  }

  return false
}
