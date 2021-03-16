/*
    Problem: Sort Array by Increasing Frequency (https://leetcode.com/problems/sort-array-by-increasing-frequency/)

    # HashMap, Sorting
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var frequencySort = function (nums) {
  const map = new Map()

  for (const n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }

  return nums.sort((a, b) =>
    map.get(a) === map.get(b) ? b - a : map.get(a) - map.get(b)
  )
}
