/*
    Problem: Longest Harmonious Subsequence (https://leetcode.com/problems/longest-harmonious-subsequence/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findLHS = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  let output = 0

  for (const key of map.keys()) {
    if (map.has(key + 1)) {
      output = Math.max(output, map.get(key) + map.get(key + 1))
    }
  }

  return output
}
