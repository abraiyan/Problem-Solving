/*
    Problem: Longest Palindrome (https://leetcode.com/problems/longest-palindrome/)
 
    # HashMap
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var longestPalindrome = function (s) {
  const map = new Map()
  let total = 0

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      total += 2
      map.delete(s[i])
    } else {
      map.set(s[i], 1)
    }
  }

  if (map.size > 0) return total + 1
  return total
}
