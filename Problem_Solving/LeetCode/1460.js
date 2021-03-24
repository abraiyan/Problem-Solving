/*
    Problem: Make Two Arrays Equal by Reversing Sub-arrays (https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var canBeEqual = function (target, arr) {
  const map = new Map()

  for (let i = 0; i < target.length; i++) {
    if (map.has(target[i])) {
      map.set(target[i], map.get(target[i]) + 1)
    } else {
      map.set(target[i], 1)
    }

    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) - 1)
    } else {
      map.set(arr[i], -1)
    }
  }

  for (const key of map.keys()) {
    if (map.get(key) !== 0) return false
  }

  return true
}
