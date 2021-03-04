/*
    Problem: Majority Element (https://leetcode.com/problems/majority-element/)

    < Input: nums = [3,2,3]
    < Output: 3

    < Input: nums = [2,2,1,1,1,2,2]
    < Output: 2

    # Array, HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
      if (map.get(nums[i]) > nums.length / 2) return nums[i]
    } else {
      map.set(nums[i], 1)
    }
  }
  return null
}
