/*
    Problem: Add to Array-Form of Integer (https://leetcode.com/problems/add-to-array-form-of-integer/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var addToArrayForm = function (num, k) {
  let output = []
  for (let i = num.length - 1; i >= 0; i--) {
    output.push((num[i] + k) % 10)
    k = parseInt((num[i] + k) / 10)
  }

  while (k > 0) {
    output.push(k % 10)
    k = parseInt(k / 10)
  }
  return output.reverse()
}
