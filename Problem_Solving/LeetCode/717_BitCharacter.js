/*
    Problem: Isomorphic Strings (https://leetcode.com/problems/1-bit-and-2-bit-characters/)

    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var isOneBitCharacter = function (bits) {
  if (bits.length === 1) return true

  if (bits.length % 2 !== 0 && bits[bits.length - 1] !== 0) return false

  let positionOfLastOneBitChar

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0) {
      positionOfLastOneBitChar = i
    } else {
      i++
    }
  }

  return positionOfLastOneBitChar === bits.length - 1
}
