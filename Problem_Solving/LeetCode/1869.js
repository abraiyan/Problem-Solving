/*
    Problem: Longer Contiguous Segments of Ones than Zeros (https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/)
*/

var checkZeroOnes = function (s) {
  let isCheckingForOne = s[0] === '1' ? true : false

  let tempLengthForOne = isCheckingForOne ? 1 : 0
  let tempLengthForZero = isCheckingForOne ? 0 : 1

  let maxOnes = tempLengthForOne
  let maxZeroes = tempLengthForZero

  for (let i = 1; i < s.length; i++) {
    if (isCheckingForOne) {
      if (s[i] === '1') {
        tempLengthForOne++
        if (maxOnes < tempLengthForOne) maxOnes = tempLengthForOne
      } else {
        isCheckingForOne = false
        tempLengthForOne = 0
        tempLengthForZero = 1
      }
    } else {
      if (s[i] === '0') {
        tempLengthForZero++
        if (maxZeroes < tempLengthForZero) maxZeroes = tempLengthForZero
      } else {
        isCheckingForOne = true
        tempLengthForZero = 0
        tempLengthForOne = 1
      }
    }
  }

  return maxOnes > maxZeroes
}
