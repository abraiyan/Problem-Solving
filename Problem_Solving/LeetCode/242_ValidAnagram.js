/*
    Problem: Valid Anagram (https://leetcode.com/problems/valid-anagram/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const mapS = new Map()

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) {
      mapS.set(s[i], mapS.get(s[i]) + 1)
    } else {
      mapS.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (mapS.has(t[i])) {
      if (mapS.get(t[i]) > 1) {
        mapS.set(t[i], mapS.get(t[i]) - 1)
      } else {
        mapS.delete(t[i])
      }
    }
  }

  return mapS.size === 0
}
