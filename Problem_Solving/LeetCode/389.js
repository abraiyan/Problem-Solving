/*
    Problem: Find the Difference (https://leetcode.com/problems/find-the-difference/)
 
    #HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findTheDifference = function (s, t) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if (map.get(t[i]) === 0) {
        return t[i]
      } else {
        map.set(t[i], map.get(t[i]) - 1)
      }
    } else {
      return t[i]
    }
  }

  return null
}
