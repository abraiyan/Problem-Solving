/*
    Problem: Find Lucky Integer in an Array (https://leetcode.com/problems/find-lucky-integer-in-an-array/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findLucky = function (arr) {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) + 1 || 1)
  }

  let ans = -1

  for (const key of map.keys()) {
    if (key === map.get(key) && map.get(key) > ans) {
      ans = key
    }
  }

  return ans
}
