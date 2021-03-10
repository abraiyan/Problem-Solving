/*
    Problem: Longest Palindrome (https://leetcode.com/problems/longest-palindrome/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var thirdMax = function (nums) {
  let max = null
  let secondMax = null
  let thirdMax = null

  for (const num of nums) {
    if (num === max || num === secondMax || num === thirdMax) {
      continue
    }

    if (max === null || num > max) {
      thirdMax = secondMax
      secondMax = max
      max = num
    } else if (secondMax === null || num > secondMax) {
      thirdMax = secondMax
      secondMax = num
    } else if (thirdMax === null || num > thirdMax) {
      thirdMax = num
    }
  }

  if (thirdMax === null) return max

  return thirdMax
}
