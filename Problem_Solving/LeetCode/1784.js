/*
    Problem: Check if Binary String Has at Most One Segment of Ones (https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/)
*/

var checkOnesSegment = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0' && s[i + 1] === '1') {
      return false
    }
  }

  return true
}
