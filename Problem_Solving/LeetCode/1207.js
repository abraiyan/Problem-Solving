/*
    Problem: Unique Number of Occurrences (https://leetcode.com/problems/unique-number-of-occurrences/)
*/

var uniqueOccurrences = function (arr) {
  const map = new Map()
  const set = new Set()
  for (const n of arr) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }

  for (const key of map.keys()) {
    if (set.has(map.get(key))) {
      return false
    }
    set.add(map.get(key))
  }

  return true
}
