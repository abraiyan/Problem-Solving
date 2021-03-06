/*
    Problem: Contains Duplicate II (https://leetcode.com/problems/contains-duplicate-ii/)

    < Input: nums = [1,2,3,1], k = 3
    < Output: true
    < Example 2:

    < Input: nums = [1,0,1,1], k = 1
    < Output: true
    < Example 3:

    < Input: nums = [1,2,3,1,2,3], k = 2
    < Output: false

    # HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) {
        return true
      } else {
        map.set(nums[i], i)
      }
    } else {
      map.set(nums[i], i)
    }
  }

  return false
}
