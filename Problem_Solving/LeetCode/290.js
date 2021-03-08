/*
    Problem: Word Pattern (https://leetcode.com/problems/word-pattern/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var wordPattern = function (pattern, s) {
  const array = s.split(' ')
  if (array.length !== pattern.length) return false

  const map = new Map()
  const set = new Set()

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      if (set.has(array[i])) {
        return false
      }
      map.set(pattern[i], array[i])
      set.add(array[i])
    } else {
      if (map.get(pattern[i]) !== array[i]) {
        return false
      }
    }
  }

  return true
}
