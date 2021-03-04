/*
    Problem: Degree of an Array (https://leetcode.com/problems/degree-of-an-array/)

    < Read from the link
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findShortestSubArray = function (nums) {
  if (nums.length === 1) return 1

  const map = new Map()
  map.set(nums[0], [0])
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.get(nums[i]).push(i)
      if (map.get(nums[i]).length > map.get(max).length) max = nums[i]
    } else {
      map.set(nums[i], [i])
    }
  }

  let degree = map.get(max)
  let ans = degree[degree.length - 1] - degree[0] + 1

  for (let i of map.keys()) {
    if (map.get(i).length === degree.length) {
      ans = Math.min(ans, map.get(i)[map.get(i).length - 1] - map.get(i)[0] + 1)
    }
  }

  return ans
}
