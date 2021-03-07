/*
    Problem: (https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var minOperations = function (s) {
  let output = 0
  if (s.length === 1) return output

  const array = s.split('')

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      if (array[i] === '1') {
        array[i] = '0'
      } else {
        array[i] = '1'
      }
      output++
    }
  }

  return Math.min(output, s.length - output)
}
