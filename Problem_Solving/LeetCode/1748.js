/*
    Problem: Sum of Unique Elements (https://leetcode.com/problems/sum-of-unique-elements/)
 
    #HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var sumOfUnique = function (nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  let output = 0

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) === 1) {
      output += nums[i]
    }
  }

  return output
}
