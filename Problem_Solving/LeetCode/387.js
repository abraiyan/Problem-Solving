/*
    Problem: First Unique Character in a String (https://leetcode.com/problems/first-unique-character-in-a-string/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var firstUniqChar = function (s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
