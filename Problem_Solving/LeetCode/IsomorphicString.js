/*
    Problem: Isomorphic Strings (https://leetcode.com/problems/isomorphic-strings/)

    < Input: s = "egg", t = "add"
    < Output: true
    < Input: s = "foo", t = "bar"
    < Output: false

    # Use: HashMap, String
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  const mapS = new Map()
  const mapT = new Map()

  let outputS = ''
  let outputT = ''
  let counter = 1

  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) {
      mapS.set(s[i], counter)
      counter++
    }
    outputS = outputS + mapS.get(s[i])
  }

  counter = 1

  for (let i = 0; i < t.length; i++) {
    if (!mapT.has(t[i])) {
      mapT.set(t[i], counter)
      counter++
    }
    outputT = outputT + mapT.get(t[i])
  }

  return outputS === outputT
}
