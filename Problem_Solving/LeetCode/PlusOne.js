/*
    Problem: https://leetcode.com/problems/plus-one/

    < [1,1,2], Output: [1, 1, 3]
    < [1,9,9], Output: [2, 0, 0]
    < [9,9], Output: [1, 0, 0]

    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

function plusOne(digits) {
  const n = digits.length

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }

  const result = new Array(n + 1).fill(0)
  result[0] = 1
  return result
}
